
document.addEventListener('DOMContentLoaded',()=>{

    const formOpenBtn = document.querySelector("#form-open"),
      home = document.querySelector(".home"),
      formContainer = document.querySelector(".form_container"),
      formCloseBtn = document.querySelector(".form_close"),
      signupBtn = document.querySelector("#signup"),
      loginBtn = document.querySelector("#login"),
      pwShowHide = document.querySelectorAll(".pw_hide");
      console.log(signupBtn, pwShowHide );
    
    formOpenBtn.addEventListener("click", () => home.classList.add("show"));
    formCloseBtn.addEventListener("click", () => home.classList.remove("show"));
    
    pwShowHide.forEach((icon) => {
      icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        console.log(getPwInput);
        if (getPwInput.type === "password") {
          getPwInput.type = "text";
          icon.classList.replace("uil-eye-slash", "uil-eye");
        } else {
          getPwInput.type = "password";
          icon.classList.replace("uil-eye", "uil-eye-slash");
        }
      });
    });
    
    fetch('/api/registervalue')
  .then(response => response.json())
  .then(data => {
    const username = data.usernamereg;
const email=data.emailreg
const password=data.passwordreg
     // Access property directly
    console.log(username,email,password);
    
  })
        //}
    //FORM VALIDATION
  
    
    const val=document.getElementById('foo');
    const val1=document.getElementById('second-tag');
    const val2=document.getElementById('third-tag');

   /* document.getElementById('formvalueid').addEventListener('submit', async function(event){
      event.preventDefault();
    const usernameInput = document.getElementById('username-id').value;
const emailInput = document.getElementById('email-id').value;
const passwordInput = document.getElementById('password-id').value;

const response = await fetch('/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ usernameInput, emailInput,passwordInput })
});

const result = await response.json();

if (result.success) {
  window.location.href='/Homepage'
} else {
  if (result.message === 'Username and email are required') {
    console.log('alpha');
  } else if (result.message === 'Incorrect password') {
    console.log('alphab');
  } else if (result.message === 'User does not exist') {
    console.log('alphac');
  }
}

});
*/
/*form.addEventListener('submit', async (e) => {
  //e.preventDefault();
 // window.location.href='/Homepage'
});
*/






    signupBtn.addEventListener("click", (e) => {
     e.preventDefault();
      formContainer.classList.add("active");
    });
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      formContainer.classList.remove("active");
    });
    
  });
    
     
    /*  goodtick <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
             <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
           </svg>*/ 
    