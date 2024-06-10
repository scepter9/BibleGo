const express=require('express');
const bodyparser=require('body-parser')

const mysql=require('mysql2/promise')
const app=express();
const path=require('path')
const dotenv=require('dotenv');
const exp = require('constants');
const nodemailer=require('nodemailer')
const bcrypt=require('bcrypt')
const randomnum=require('./random');
const session=require('express-session')
const validator=require('validator')



dotenv.config()
app.set('views', path.join(__dirname, 'Bible-project'));
app.set('view engine','ejs')
app.use(session({
  secret:process.env.SECRET,
  resave:false,
  saveUninitialized:false,
  cookie: {
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
  },
}))
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

app.post('/register', async (req, res) => {
  const verkey=randomnum()
//  req.session.verkey = verkey;

  try {
    const { fullname, username, email, password, phone, gender } = req.body;
    req.session.usernameregister=username;
    req.session.emailregister=email;
    req.session.passwordregister=password;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const results = await insertStaffData(fullname, username, email, phone, gender, hashedPassword,verkey);
    async function insertStaffData(fullname,username,email,phone,gender, hashedPassword,verkey) {
      const sql = `INSERT INTO projecttables (FULLNAME, USERNAME, EMAIL, PHONE, PASSWORD, VERIFICATION, Gender) VALUES (?, ?, ?, ?, ?, ?)`;
    
      try {
        const [results] = await pool.query(sql, [
          fullname,
          username,
          email,
          phone,
          gender,
          hashedPassword,
          verkey
        ]);
        console.log('Data inserted successfully:', results);
        return results;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to insert staff data'); // Throw a specific error for better handling
      }
    }
    // Send welcome email to the user
   const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MYEMAIL_NAME,
        pass: process.env.MYEMAIL_PASSWORD
      }
    });

    const mailOptions = {
      from: process.env.MYEMAIL_NAME,
      to: email,
      subject: 'WELCOME TO BIBLE.GO',
      text: `Dear ${username},

Welcome to HelloWorld! We're thrilled to have you as a new member of our community.

At HelloWorld, we strive to provide an exceptional experience for all our users. Whether you're here to connect with others, explore new opportunities, or simply enjoy our services, we're committed to making your experience enjoyable and fulfilling.

As a member of HelloWorld, you'll have access to a wide range of features and resources designed to help you [describe the main benefits or features of your website].

We encourage you to explore our website and discover everything HelloWorld has to offer. If you have any questions or need assistance, please don't hesitate to reach out to our support team at [support@helloworld.com].

Once again, welcome to HelloWorld! We're excited to embark on this journey with you.

YOUR VERIFICATION KEY IS ${verkey}

Best regards,
The BibleGo team`
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.redirect('/validate'); // Redirect after successful insertion
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while processing your registration. Please try again.');
  }
  process.on('SIGINT', async () => {
    console.log('Received SIGINT signal, closing connection pool...');
    await closePool();
    process.exit(0);
  });
});

async function closePool() {
  try {
    await pool.end();
    console.log('Connection pool closed successfully.');
  } catch (error) {
    console.error('Error closing connection pool:', error);
  }
}
app.post('/', async (req, res) => {
  const { username, email, password, checkbox } = req.body;

  // Debugging: Log the request body


  if (username === undefined || email === undefined || username === '' || email === '') {
    return res.status(400).json({ error: 'Username and email are required' });
  }

  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.execute('SELECT * FROM projecttables WHERE USERNAME = ? AND EMAIL= ?', [username, email]);
    const userExists = rows.length > 0;
    connection.release();

    if (userExists) {
      const user = rows[0];
      const isPasswordValid = await bcrypt.compare(password, user.PASSWORD);

      if (isPasswordValid) {
        req.session.verkey = user.VERIFICATION;
        req.session.user = user.FULLNAME;
        req.session.fullvalue = user.USERNAME;

        if (checkbox) {
          req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; // 30 days
        }
        return res.redirect('/Homepage');
      } else {
        return res.status(401).render(path.join(__dirname,'../index.ejs'),{ error: 'Incorrect password' });
      }
    } else {
      return res.status(401).render(path.join(__dirname,'../index.ejs'),{ error: 'User does not exist' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.post('/forgotpassword', async (req, res) => {
  try {
    const { emailconfirmation } = req.body;
    const existingUser = await getUserByEmail(emailconfirmation);
    const email=req.session.emailconfirmation;
    
    if (!existingUser) {
      return res.status(400).send('Email does not exist.');
    }

    // Send welcome email to the user
    const randomnumber = randomnum();
    const sendrandom=req.session.randomnumber
    sendResetcode(existingUser.EMAIL, randomnumber);

    res.redirect('/resetpassword')
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while processing your request. Please try again.');
  }
});

async function getUserByEmail(email) {
  const sql = `SELECT * FROM projecttables WHERE EMAIL = ?`;
  const [rows] = await pool.query(sql, [email]);
  return rows.length ? rows[0] : null;
}

function sendResetcode(email, random) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MYEMAIL_NAME,
      pass: process.env.MYEMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.MYEMAIL_NAME,
    to: email,
    subject: 'RESET PASSWORD ',
    text: `Dear user,


YOUR RESET PASSWORD KEY IS ${random}

Best regards,
The BibleGo team`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
app.post('/resetpassword', async (req, res) => {
  try {
    const { emailpass, emailpassconfirm ,resetKey} = req.body;

    if (resetKey !== req.session.randomnumber) {
      return res.status(400).send('Invalid reset key.');
    }
    // Check if the passwords match
    if (emailpass !== emailpassconfirm) {
      return res.status(400).send('Passwords do not match.');
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(emailpass, salt);
    // Update the password in the database
    const updated = await updatePasswordByEmail(req.session.emailconfirmation, hashedPassword);
    
    if (!updated) {
      return res.status(400).send('Failed to update password.');
    }

    res.send('Password updated successfully.');
    async function updatePasswordByEmail(email, newPassword) {
      const sql = `UPDATE projecttables SET PASSWORD = ? WHERE EMAIL = ?`;
      const [result] = await pool.query(sql, [newPassword, email]);
      
      // Check if the query affected any rows (i.e., if the email exists in the database)
      return result.affectedRows > 0;
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while processing your request.');
  }
});

app.post('/contact',(req,res)=>{
  const {name,email,message}=req.body;
  
})

app.get('/', (req, res) => {
  // Check if the user is already logged in
  if (req.session.verkey) {
    // User is already logged in, redirect to dashboard
    res.redirect('/Homepage');
  } else {
    // Render the login form
    res.render(path.join(__dirname,'../index.ejs'),{error:null})
  }
});
 
app.get('/register',(req,res)=>{
  res.render(path.join(__dirname,'../registration.ejs'))
})
app.get('/services',(req,res)=>{
  res.render(path.join(__dirname,'../Services.ejs'))
})
app.get('/Homepage',(req,res)=>{
  res.render(path.join(__dirname,'../Homepage.ejs'))
  
})
app.get('/forgotpassword',(req,res)=>{
  res.render(path.join(__dirname,'./forgotpass.ejs'))
})
app.get('/resetpassword',(req,res)=>{
  res.render(path.join(__dirname,'./resetpage.ejs'))
 
  
})
app.get('/logout',(req,res)=>{
  req.session.destroy(err=>{
    if(err){
      console.error(err);
    }
    res.redirect('/')
  })
})
app.get('/api/key', (req, res) => {
  const verkey = req.session.verkey;
  if (verkey) {
    res.json({ verkey });
  } else {
    res.status(401).json({ message: 'Unauthorized: Please log in first' });
  }
});

app.get('/api/value', (req, res) => {
  const username = req.session.fullvalue; // Access username directly
  const fullnameval=req.session.user
  res.json({ username,fullnameval });
});

app.get('/api/registervalue', (req, res) => {
  const usernamereg = req.session.usernameregister; // Access username directly
  const emailreg=req.session.emailregister
  const passwordreg=req.session.passwordregister
  res.json({ usernamereg,emailreg,passwordreg });
});
app.get('/contact',(req,res)=>{
  res.render(path.join(__dirname,'../Contact.ejs'))
})
app.get('/About',(req,res)=>{
  res.render(path.join(__dirname,'./About.ejs'))
})
app.get('/result',(req,res)=>{
  res.render(path.join(__dirname,'../result.ejs'))
})

app.get('/validate',(req,res)=>{
  res.render(path.join(__dirname,'../validatepage.ejs'))
})
app.get('/viewresult',(req,res)=>{
  res.render(path.join(__dirname,'./viewresult.ejs'))
})
app.use((req, res) => {
  res.status(404).render(path.join(__dirname,'../404.ejs')); // Send the 404 page
});
app.listen(3000,()=>{
  console.log('Server is responding');
})
