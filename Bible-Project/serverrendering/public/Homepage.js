
document.addEventListener('DOMContentLoaded',()=>{
  
  document.getElementById('testarea').style.display='none';
  document.getElementById('timer').style.display='none';
  document.getElementById('submit-id').style.display='none';
  document.getElementById('sign-out-model').style.display='none';
  const backToTopButton = document.getElementById("backToTop");

  const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// js code to toggle search box
      
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});



 
backToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

 
  

  fetch('/api/key')
  .then(response => response.json())
  .then(data => {
      const { verkey } = data; // Destructuring
      // or
      console.log(verkey);
      //OOA0FN
      //GS3#4rre@!
      
    //  console.log(verkey); // Dot notation
      // Use verkey for frontend operations

      const button=document.getElementById('buttonvalueid');
      button.addEventListener('click',()=>{
        //SETTING VERIFICATION KEY
        const inputtype=document.getElementById('input-val')
        const inputvalue=document.getElementById('input-val').value;
        const putvalue=document.getElementById('justputhings')
        if(inputvalue===verkey){ 
          document.getElementById('testarea').style.display='block';
        document.getElementById('timer').style.display='block';
        document.getElementById('hide').style.display='none'
        inputtype.style.borderColor='green'
      }else{
        document.getElementById('testarea').style.display='none';
        document.getElementById('timer').style.display='none';
    inputtype.style.borderColor='red'
    putvalue.innerHTML='Invalid verification key'
    putvalue.style.color='red'
    inputtype.classList.add('shake')
    setTimeout(()=>{inputtype.classList.remove('shake')},500)
    }


  });
  //NAVIGATING THROUGH PAGES
  const getAll = document.querySelectorAll('.items');
const prev = document.getElementById('previous');
const nextval = document.getElementById('nextpage');
const submiting = document.getElementById('submit-id');

let currentval = 0;

const showpage = (index) => {
  getAll.forEach((items, i) => {
    if (i === index) {
      items.style.display = 'block';
    } else {
      items.style.display = 'none';
    }
  });
};

showpage(currentval);

const updatebuttons = () => {
  if (currentval === 0) {
    prev.style.display = 'none';
  } else {
    prev.style.display = 'block';
  }

  if (currentval === getAll.length - 1) {
    nextval.style.display = 'none';
    submiting.style.display = 'block';
  } else {
    nextval.style.display = 'block';
    submiting.style.display = 'none'; // Changed from 'hide' to 'none'
  }
};

prev.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (currentval > 0) {
    currentval--;
    showpage(currentval);
    updatebuttons();
  }
});

nextval.addEventListener('click', () => {
  if(window.innerWidth<=584){
    nextval.style.clear='both'
  }
 
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (currentval < getAll.length - 1) {
    currentval++;
    showpage(currentval);
    updatebuttons();
  }
});

updatebuttons()





//SETTING PROMPT MESSAGE



   //setting clicked functions
 





/////PREVIOUSLY CLICKED BUTTONS////////
  let previouslyClickedButton = null;
  let previouslyClickedButton1 = null; // Initialize a variable to store the previously clicked button
  let previouslyClickedButton2 = null;
  let previouslyClickedButton3 = null;
  let previouslyClickedButton4 = null
  let previouslyClickedButton5 = null
  let previouslyClickedButton6 = null
  let previouslyClickedButton7 = null  
  let previouslyClickedButton8 = null
  let previouslyClickedButton9 = null
  let previouslyClickedButton10 = null
  let previouslyClickedButton11= null
  let previouslyClickedButton12= null
  let previouslyClickedButton13= null
  let previouslyClickedButton14= null
  let previouslyClickedButton15= null
  let previouslyClickedButton16= null
  let previouslyClickedButton17= null
  let previouslyClickedButton18= null
  let previouslyClickedButton19= null
  let previouslyClickedButton20= null
  let previouslyClickedButton21= null
  let previouslyClickedButton22= null
  let previouslyClickedButton23= null
  let previouslyClickedButton24= null
  let previouslyClickedButton25= null
  let previouslyClickedButton26= null
  let previouslyClickedButton27= null
  let previouslyClickedButton28= null
  let previouslyClickedButton29= null
  let previouslyClickedButton30= null
  let previouslyClickedButton31= null
  let previouslyClickedButton32= null
  let previouslyClickedButton33= null
  let previouslyClickedButton34= null
  let previouslyClickedButton35= null
  let previouslyClickedButton36= null
  let previouslyClickedButton37= null
  let previouslyClickedButton38= null
  let previouslyClickedButton39= null
  let previouslyClickedButton40= null
  let previouslyClickedButton41= null
  let previouslyClickedButton42= null
  let previouslyClickedButton43= null
  let previouslyClickedButton44= null
  let previouslyClickedButton45= null
  let previouslyClickedButton46= null
  let previouslyClickedButton47= null
  let previouslyClickedButton48= null
  let previouslyClickedButton49= null
  
 











  // Select all buttons
  const buttons = document.querySelectorAll('.buttone');
  const buttons1 = document.querySelectorAll(".buttone1");
  const buttons2= document.querySelectorAll(".buttone2");
  const buttons3 = document.querySelectorAll(".buttone3");
  const buttons4 = document.querySelectorAll(".buttone4");
  const buttons5 = document.querySelectorAll(".buttone5");
  const buttons6= document.querySelectorAll(".buttone6");
  const buttons7 = document.querySelectorAll(".buttone7");
  const buttons8 = document.querySelectorAll(".buttone8");
  const buttons9 = document.querySelectorAll(".buttone9");
  const buttons10 = document.querySelectorAll(".buttone10");
  const buttons11 = document.querySelectorAll(".buttone11");
  const buttons12 = document.querySelectorAll(".buttone12");
  const buttons13 = document.querySelectorAll(".buttone13");
  const buttons14 = document.querySelectorAll(".buttone14");
  const buttons15 = document.querySelectorAll(".buttone15");
  const buttons16 = document.querySelectorAll(".buttone16");
  const buttons17 = document.querySelectorAll(".buttone17");
  const buttons18 = document.querySelectorAll(".buttone18");
  const buttons19 = document.querySelectorAll(".buttone19");
  const buttons20 = document.querySelectorAll(".buttone20");
  const buttons21 = document.querySelectorAll(".buttone21");
  const buttons22 = document.querySelectorAll(".buttone22");
  const buttons23 = document.querySelectorAll(".buttone23");
  const buttons24 = document.querySelectorAll(".buttone24");
  const buttons25 = document.querySelectorAll(".buttone25");
  const buttons26 = document.querySelectorAll(".buttone26");
  const buttons27 = document.querySelectorAll(".buttone27");
  const buttons28 = document.querySelectorAll(".buttone28");
  const buttons29 = document.querySelectorAll(".buttone29");
  const buttons30 = document.querySelectorAll(".buttone30");
  const buttons31 = document.querySelectorAll(".buttone31");
  const buttons32 = document.querySelectorAll(".buttone32");
  const buttons33 = document.querySelectorAll(".buttone33");
  const buttons34 = document.querySelectorAll(".buttone34");
  const buttons35 = document.querySelectorAll(".buttone35");
  const buttons36 = document.querySelectorAll(".buttone36");
  const buttons37 = document.querySelectorAll(".buttone37");
  const buttons38 = document.querySelectorAll(".buttone38");
  const buttons39 = document.querySelectorAll(".buttone39");
  const buttons40 = document.querySelectorAll(".buttone40");
  const buttons41 = document.querySelectorAll(".buttone41");
  const buttons42 = document.querySelectorAll(".buttone42");
  const buttons43 = document.querySelectorAll(".buttone43");
  const buttons44 = document.querySelectorAll(".buttone44");
  const buttons45 = document.querySelectorAll(".buttone45");
  const buttons46 = document.querySelectorAll(".buttone46");
  const buttons47 = document.querySelectorAll(".buttone47");
  const buttons48 = document.querySelectorAll(".buttone48");
  const buttons49 = document.querySelectorAll(".buttone49");

  


  //COUNT BUTTONS
  let counted=0;
  let counted1=0; 
  let counted2=0;
  let counted3=0;
  let counted4=0;
  let counted5=0;
  let counted6=0;
  let counted7=0;
  let counted8=0;
  let counted9=0;
  let counted10=0;
  let counted11=0;
  let counted12=0;
  let counted13=0;
  let counted14=0;
  let counted15=0;
  let counted16=0;
  let counted17=0;
  let counted18=0;
  let counted19=0;
  let counted20=0;
  let counted21=0;
  let counted22=0;
  let counted23=0;
  let counted24=0;
  let counted25=0;
  let counted26=0;
  let counted27=0;
  let counted28=0;
  let counted29=0;
  let counted30=0;
  let counted31=0;
  let counted32=0;
  let counted33=0;
  let counted34=0;
  let counted35=0;
  let counted36=0;
  let counted37=0; 
  let counted38=0;
  let counted39=0;
  let counted40=0;
  let counted41=0;
  let counted42=0;
  let counted43=0;
  let counted44=0;
  let counted45=0;
  let counted46=0;
  let counted47=0;
  let counted48=0;
  let counted49=0;
  
 
  


  // Add event listener to each button
 
// Add event listener to the parent container (body element) for click events

  //BUTTON 1
  
  buttons.forEach(button => {
    button.addEventListener("click", () => {
  
      // If this button was already clicked, return to default color
      if (button === previouslyClickedButton) {
        button.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton = null;
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton) {
        previouslyClickedButton.style.backgroundColor = ""; // Restore previous button's color
      }
      button.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton = button;
  
      // Update the count based on the button clicked
      const answer = button.getAttribute('data-answer');
      if (answer === 'b' && counted < 1) {
        counted++;
      } else {
        counted = Math.max(counted - 1, 0); // Ensure count doesn't go below 0
      }
  
      //console.log(counted); // Log the updated count

      updateCountValue()
    });
  });

//BUTTON 2

  buttons1.forEach(button1 => {
    button1.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button1 === previouslyClickedButton1) {
        button1.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton1 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton1) {
        previouslyClickedButton1.style.backgroundColor = ""; // Restore previous button's color
      }
      button1.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton1 = button1; 
     
      // Store the current button for future reference
      const answer1 = button1.getAttribute('data-answer');
        if (answer1 === 'a' && counted1<1) {
          counted1++
        } else {
          counted1= Math.max(counted1 - 1, 0); // Ensure count doesn't go below 1
        }
         
        //console.log(counted1);
        updateCountValue()
    });
  });
  
//BUTTON 3

  buttons2.forEach(button2 => {
    button2.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button2=== previouslyClickedButton2) {
        button2.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton2 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton2) {
        previouslyClickedButton2.style.backgroundColor = ""; // Restore previous button's color
      }
      button2.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton2 = button2; 
     
      // Store the current button for future reference
      const answer2 = button2.getAttribute('data-answer');
        if (answer2 === 'a' && counted2<1) {
          counted2++;
        } else {
          counted2= Math.max(counted2 - 1, 0); // Ensure count doesn't go below 1
        }
       // console.log(counted);
       updateCountValue()
    });
  });
  

//BUTTON 4
  buttons3.forEach(button3 => {
    button3.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button3 === previouslyClickedButton3) {
        button3.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton3= null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton3) {
        previouslyClickedButton3.style.backgroundColor = ""; // Restore previous button's color
      }
      button3.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton3 = button3; 
     
      // Store the current button for future reference
      const answer3 = button3.getAttribute('data-answer');
        if (answer3 === 'b' && counted3<1) {
          counted3++
        } else {
          counted3= Math.max(counted3 - 1, 0); // Ensure count doesn't go below 1
        }
        
        //console.log(counted);
        updateCountValue()
    });
  });
  
//BUTTON 5

  buttons4.forEach(button4 => {
    button4.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button4 === previouslyClickedButton4) {
        button4.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton4 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton4) {
        previouslyClickedButton4.style.backgroundColor = ""; // Restore previous button's color
      }
      button4.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton4 = button4; 
     
      // Store the current button for future reference
      const answer4 = button4.getAttribute('data-answer');
        if (answer4 === 'b' && counted4<1) {
          counted4++
        } else {
          counted4= Math.max(counted4 - 1, 0); // Ensure count doesn't go below 1
        }
        
       // console.log(counted);
       updateCountValue()
    });
  });
  
//BUTTON 6

  buttons5.forEach(button5 => {
    button5.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button5 === previouslyClickedButton5) {
        button5.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton5= null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton5) {
        previouslyClickedButton5.style.backgroundColor = ""; // Restore previous button's color
      }
      button5.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton5 = button5; 
     
      // Store the current button for future reference
      const answer5 = button5.getAttribute('data-answer');
        if (answer5 === 'a' && counted5<1) {
          counted5++
        } else {
          counted= Math.max(counted5 - 1, 0); // Ensure count doesn't go below 1
        }
        //console.log(counted);
        updateCountValue()
    });
  });
  
//BUTTON 7

  buttons6.forEach(button6=> {
    button6.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button6=== previouslyClickedButton6) {
        button6.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton6= null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton6) {
        previouslyClickedButton6.style.backgroundColor = ""; // Restore previous button's color
      }
      button6.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton6 = button6; 
     
      // Store the current button for future reference
      const answer6 = button6.getAttribute('data-answer');
        if (answer6 === 'a' && counted6<1) {
          counted6++
        } else {
          counted6= Math.max(counted6 - 1, 0); // Ensure count doesn't go below 1
        }
       // console.log(counted);
       updateCountValue()
    });
  });
  
//BUTTON 8

  buttons7.forEach(button7 => {
    button7.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button7 === previouslyClickedButton7) {
        button7.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton7= null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton7) {
        previouslyClickedButton7.style.backgroundColor = ""; // Restore previous button's color
      }
      button7.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton7= button7; 
     
      // Store the current button for future reference
      const answer7 = button7.getAttribute('data-answer');
        if (answer7 === 'b' && counted7<1) {
          counted7++
        } else {
          counted7= Math.max(counted7 - 1, 0); // Ensure count doesn't go below 1
        }
        //console.log(counted);
        updateCountValue()
    });
  });
  
//BUTTON 9

  buttons8.forEach(button8 => {
    button8.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button8 === previouslyClickedButton8) {
        button8.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton8= null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton8) {
        previouslyClickedButton8.style.backgroundColor = ""; // Restore previous button's color
      }
      button8.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton8= button8; 
     
      // Store the current button for future reference
      const answer8 = button8.getAttribute('data-answer');
        if (answer8 === 'b' && counted8<1) {
          counted8++
        } else {
          counted8= Math.max(counted8 - 1, 0); // Ensure count doesn't go below 1
        }
      //  console.log(counted);
      updateCountValue()
    });
  });
  
//BUTTON 10

  buttons9.forEach(button9 => {
    button9.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button9 === previouslyClickedButton9) {
        button9.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton9= null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton9) {
        previouslyClickedButton9.style.backgroundColor = ""; // Restore previous button's color
      }
      button9.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton9 = button9; 
     
      // Store the current button for future reference
      const answer9 = button9.getAttribute('data-answer');
        if (answer9 === 'a' && counted9<1) {
          counted9++
        } else {
          counted9= Math.max(counted9 - 1, 0); // Ensure count doesn't go below 1
        }
        //console.log(counted);
        updateCountValue()
    });
  });
  
//BUTTON 11

  buttons10.forEach(button10 => {
    button10.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button10 === previouslyClickedButton10) {
        button10.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton10 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton10) {
        previouslyClickedButton10.style.backgroundColor = ""; // Restore previous button's color
      }
      button10.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton10 = button10; 
     
      // Store the current button for future reference
      const answer10 = button10.getAttribute('data-answer');
        if (answer10 === 'c' && counted10<1) {
          counted10++
        } else {
          counted10= Math.max(counted10 - 1, 0); // Ensure count doesn't go below 1
        }
        //console.log(counted);
        updateCountValue()
    });
  });
  
//BUTTON 12

  buttons11.forEach(button11 => {
    button11.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button11 === previouslyClickedButton11) {
        button11.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton11 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton11) {
        previouslyClickedButton11.style.backgroundColor = ""; // Restore previous button's color
      }
      button11.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton11 = button11; 
     
      // Store the current button for future reference
      const answer11 = button11.getAttribute('data-answer');
        if (answer11 === 'a' && counted11<1) {
          counted11++
        } else {
          counted11= Math.max(counted11 - 1, 0); // Ensure count doesn't go below 1
        }
        //console.log(counted);
        updateCountValue()
    });
  });
  

//BUTTON 13
  buttons12.forEach(button12 => {
    button12.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button12 === previouslyClickedButton12) {
        button12.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton12 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton12) {
        previouslyClickedButton12.style.backgroundColor = ""; // Restore previous button's color
      }
      button12.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton12 = button12; 
     
      // Store the current button for future reference
      const answer12 = button12.getAttribute('data-answer');
        if (answer12 === 'd' && counted12<1) {
          counted12++
        } else {
          counted12= Math.max(counted12 - 1, 0); // Ensure count doesn't go below 1
        }
       // console.log(counted);
       updateCountValue()
    });
  });
  
//BUTTON 14 

  buttons13.forEach(button13 => {
    button13.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button13 === previouslyClickedButton13) {
        button13.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton13 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton13) {
        previouslyClickedButton13.style.backgroundColor = ""; // Restore previous button's color
      }
      button13.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton13 = button13; 
     
      // Store the current button for future reference
      const answer13 = button13.getAttribute('data-answer');
        if (answer13 === 'a' && counted13<1) {
          counted13++
        } else {
          counted13= Math.max(counted13 - 1, 0); // Ensure count doesn't go below 1
        }
        //console.log(counted);
        updateCountValue()
    });
  });
  
//BUTTON 15

  buttons14.forEach(button14 => {
    button14.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button14 === previouslyClickedButton14) {
        button14.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton14 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton14) {
        previouslyClickedButton14.style.backgroundColor = ""; // Restore previous button's color
      }
      button14.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton14 = button14; 
     
      // Store the current button for future reference
      const answer14 = button14.getAttribute('data-answer');
        if (answer14 === 'c' && counted14<1) {
          counted14++
        } else {
          counted14= Math.max(counted14 - 1, 0); // Ensure count doesn't go below 1
        }
       // console.log(counted);
       updateCountValue()
    });
  });
  
//BUTTON 16

  buttons15.forEach(button15 => {
    button15.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button15 === previouslyClickedButton15) {
        button15.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton15 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton15) {
        previouslyClickedButton15.style.backgroundColor = ""; // Restore previous button's color
      }
      button15.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton15 = button15; 
     
      // Store the current button for future reference
      const answer15 = button15.getAttribute('data-answer');
        if (answer15 === 'a' && counted15<1) {
          counted15++
        } else {
          counted= Math.max(counted15 - 1, 0); // Ensure count doesn't go below 1
        }
        //console.log(counted);
        updateCountValue()
    });
  });
  
//BUTTON 17

  buttons16.forEach(button16 => {
    button16.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button16 === previouslyClickedButton16) {
        button16.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton16 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton16) {
        previouslyClickedButton16.style.backgroundColor = ""; // Restore previous button's color
      }
      button16.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton16 = button16; 
     
      // Store the current button for future reference
      const answer16 = button16.getAttribute('data-answer');
        if (answer16 === 'b' && counted16<1) {
          counted16++
        } else {
          counted16= Math.max(counted16 - 1, 0); // Ensure count doesn't go below 1
        }
       // console.log(counted);
       updateCountValue()
    });
  });
  
//BUTTON 18

  buttons17.forEach(button17 => {
    button17.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button17 === previouslyClickedButton17) {
        button17.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton17 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton17) {
        previouslyClickedButton17.style.backgroundColor = ""; // Restore previous button's color
      }
      button17.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton17 = button17; 
     
      // Store the current button for future reference
      const answer17 = button17.getAttribute('data-answer');
        if (answer17 === 'a' && counted17<1) {
          counted17++
        } else {
          counted17= Math.max(counted17 - 1, 0); // Ensure count doesn't go below 1
        }
        //console.log(counted);
        updateCountValue()
    });
  });
  
//BUTTON 19

  buttons18.forEach(button18 => {
    button18.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button18 === previouslyClickedButton18) {
        button18.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton18 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton18) {
        previouslyClickedButton18.style.backgroundColor = ""; // Restore previous button's color
      }
      button18.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton18 = button18; 
     
      // Store the current button for future reference
        const answer18 = button18.getAttribute('data-answer');
        if (answer18 === 'd' && counted18<1) {
          counted18++
        } else {
          counted18= Math.max(counted18 - 1, 0); // Ensure count doesn't go below 1
        }
        //console.log(counted);
         updateCountValue()
    });
  });
  
//BUTT0N 20 

  buttons19.forEach(button19 => {
    button19.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button19 === previouslyClickedButton19) {
        button19.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton19 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton19) {
        previouslyClickedButton19.style.backgroundColor = ""; // Restore previous button's color
      }
      button19.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton19 = button19; 
     
      // Store the current button for future reference
      const answer19 = button19.getAttribute('data-answer');
        if (answer19 === 'c' && counted19<1) {
          counted19++
        } else {
          counted19= Math.max(counted19 - 1, 0); // Ensure count doesn't go below 1
        }
       // console.log(counted);
       updateCountValue()
    });
  });
  
//BUTTON 21

  buttons20.forEach(button20 => {
    button20.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button20 === previouslyClickedButton20) {
        button20.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton20 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton20) {
        previouslyClickedButton20.style.backgroundColor = ""; // Restore previous button's color
      }
      button20.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton20 = button20; 
     
      // Store the current button for future reference
      const answer20 = button20.getAttribute('data-answer');
        if (answer20 === 'c' && counted20<1) {
          counted20++
        } else {
          counted20= Math.max(counted20 - 1, 0); // Ensure count doesn't go below 1
        }
       // console.log(counted);
       updateCountValue()
    });
  });
  
//BUTTON 22

  buttons21.forEach(button21 => {
    button21.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button21 === previouslyClickedButton21) {
        button21.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton21 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton21) {
        previouslyClickedButton21.style.backgroundColor = ""; // Restore previous button's color
      }
      button21.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton21 = button21; 
     
      // Store the current button for future reference
      const answer21 = button21.getAttribute('data-answer');
        if (answer21=== 'a' && counted21<1) {
          counted21++
        } else {
          counted21= Math.max(counted21 - 1, 0); // Ensure count doesn't go below 1
        }
       // console.log(counted);
       updateCountValue()
    });
  });
  
//BUTTON 23

  buttons22.forEach(button22 => {
    button22.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button22 === previouslyClickedButton22) {
        button22.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton22 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton22) {
        previouslyClickedButton22.style.backgroundColor = ""; // Restore previous button's color
      }
      button22.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton22 = button22; 
     
      // Store the current button for future reference
      const answer22 = button22.getAttribute('data-answer');
        if (answer22 === 'c' && counted22<1) {
          counted22++
        } else {
          counted22= Math.max(counted22 - 1, 0); // Ensure count doesn't go below 1
        }
       // console.log(counted);
       updateCountValue()
    });
  });
  
//BUTTON 24

  buttons23.forEach(button23 => {
    button23.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button23 === previouslyClickedButton23) {
        button23.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton23 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton23) {
        previouslyClickedButton23.style.backgroundColor = ""; // Restore previous button's color
      }
      button23.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton23 = button23; 
     
      // Store the current button for future reference
      const answer23 = button23.getAttribute('data-answer');
        if (answer23 === 'b' && counted23<1) {
          counted23++
        } else {
          counted23= Math.max(counted23 - 1, 0); // Ensure count doesn't go below 1
        }
       // console.log(counted);
       updateCountValue()
    });
  });
  
//BUTTON 25

  buttons24.forEach(button24 => {
    button24.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button24 === previouslyClickedButton24) {
        button24.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton24 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton24) {
        previouslyClickedButton24.style.backgroundColor = ""; // Restore previous button's color
      }
      button24.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton24 = button24; 
     
      // Store the current button for future reference
      const answer24 = button24.getAttribute('data-answer');
        if (answer24 === 'a' && counted24<1) {
          counted24++
        } else {
          counted24= Math.max(counted24 - 1, 0); // Ensure count doesn't go below 1
        }
       // console.log(counted);
       updateCountValue()
    });
  });
  
//BUTTON 26

  buttons25.forEach(button25 => {
    button25.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button25 === previouslyClickedButton25) {
        button25.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton25 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton25) {
        previouslyClickedButton25.style.backgroundColor = ""; // Restore previous button's color
      }
      button25.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton25 = button25; 
     
      // Store the current button for future reference
      const answer25 = button25.getAttribute('data-answer');
        if (answer25 === 'd' && counted25<1) {
          counted25++
        } else {
          counted25= Math.max(counted25 - 1, 0); // Ensure count doesn't go below 1
        }
        //console.log(counted);
        updateCountValue()
    });
  });
  
//BUTTON 27

  buttons26.forEach(button26 => {
    button26.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button26 === previouslyClickedButton26) {
        button26.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton26 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton26) {
        previouslyClickedButton26.style.backgroundColor = ""; // Restore previous button's color
      }
      button26.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton26 = button26; 
     
      // Store the current button for future reference
      const answer26 = button26.getAttribute('data-answer');
        if (answer26 === 'a' && counted26<1) {
          counted26++
        } else {
          counted26= Math.max(counted26 - 1, 0); // Ensure count doesn't go below 1
        }
        //console.log(counted);
        updateCountValue()
    });
  });
  
//BUTTON 28

  buttons27.forEach(button27 => {
    button27.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button27 === previouslyClickedButton27) {
        button27.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton27 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton27) {
        previouslyClickedButton27.style.backgroundColor = ""; // Restore previous button's color
      }
      button27.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton27 = button27; 
     
      // Store the current button for future reference
      const answer27 = button27.getAttribute('data-answer');
        if (answer27 === 'c' && counted27<1) {
          counted27++
        } else {
          counted27= Math.max(counted27 - 1, 0); // Ensure count doesn't go below 1
        }
        //console.log(counted);
        updateCountValue()
    });
  });
  
//BUTTON 29

  buttons28.forEach(button28 => {
    button28.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button28 === previouslyClickedButton28) {
        button28.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton28 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton28) {
        previouslyClickedButton28.style.backgroundColor = ""; // Restore previous button's color
      }
      button28.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton28 = button28; 
     
      // Store the current button for future reference
      const answer28 = button28.getAttribute('data-answer');
        if (answer28 === 'a' && counted28<1) {
          counted28++
        } else {
          counted28= Math.max(counted28 - 1, 0); // Ensure count doesn't go below 1
        }
        //console.log(counted);
        updateCountValue()
    });
  });
  
//BUTTON 30 

  buttons29.forEach(button29 => {
    button29.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button29 === previouslyClickedButton29) {
        button29.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton29 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton29) {
        previouslyClickedButton29.style.backgroundColor = ""; // Restore previous button's color
      }
      button29.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton29 = button29; 
     
      // Store the current button for future reference
      const answer29 = button29.getAttribute('data-answer');
        if (answer29 === 'b' && counted29<1) {
          counted29++
        } else {
          counted29= Math.max(counted29 - 1, 0); // Ensure count doesn't go below 1
        }
       // console.log(counted);
       updateCountValue()
    });
  });
  
//BUTTON 31 

  buttons30.forEach(button30 => {
    button30.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button30 === previouslyClickedButton30) {
        button30.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton30 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton30) {
        previouslyClickedButton30.style.backgroundColor = ""; // Restore previous button's color
      }
      button30.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton30 = button30; 
     
      // Store the current button for future reference
      const answer30 = button30.getAttribute('data-answer');
        if (answer30 === 'd' && counted30<1) {
          counted30++
        } else {
          counted30= Math.max(counted30 - 1, 0); // Ensure count doesn't go below 1
        }
        //console.log(counted);
        updateCountValue()
    });
  });
  
//BUTTON 32

  buttons31.forEach(button31 => {
    button31.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button31 === previouslyClickedButton31) {
        button31.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton31 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton31) {
        previouslyClickedButton31.style.backgroundColor = ""; // Restore previous button's color
      }
      button31.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton = button; 
     
      // Store the current button for future reference
      const answer31 = button31.getAttribute('data-answer');
        if (answer31 === 'a' && counted31<1) {
          counted31++
        } else {
          counted31= Math.max(counted31 - 1, 0); // Ensure count doesn't go below 1
        }
        //console.log(counted);
        updateCountValue()
    });
  });
  
//BUTTON 33

  buttons32.forEach(button32 => {
    button32.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button32 === previouslyClickedButton32) {
        button32.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton32 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton32) {
        previouslyClickedButton32.style.backgroundColor = ""; // Restore previous button's color
      }
      button32.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton32 = button32; 
     
      // Store the current button for future reference
      const answer32 = button32.getAttribute('data-answer');
        if (answer32 === 'c' && counted32<1) {
          counted32++
        } else {
          counted32= Math.max(counted32 - 1, 0); // Ensure count doesn't go below 1
        }
        //console.log(counted);
        updateCountValue()
    });
  });
  
//BUTTON 34

  buttons33.forEach(button33 => {
    button33.addEventListener("click", () => {
      


      // If this button was already clicked, return to default color
      if (button33 === previouslyClickedButton33) {
        button33.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton33 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton33) {
        previouslyClickedButton33.style.backgroundColor = ""; // Restore previous button's color
      }
      button33.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton33 = button33; 
     
      // Store the current button for future reference
      const answer33 = button33.getAttribute('data-answer');
        if (answer33 === 'b' && counted33<1) {
          counted33++
        } else {
          counted33= Math.max(counted33 - 1, 0); // Ensure count doesn't go below 1
        }
        //console.log(counted);
        updateCountValue()
    });
  });
  
//BUTTON 35

  buttons34.forEach(button34 => {
    button34.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button34 === previouslyClickedButton34) {
        button34.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton34 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton34) {
        previouslyClickedButton34.style.backgroundColor = ""; // Restore previous button's color
      }
      button34.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton34 = button34; 
     
      // Store the current button for future reference
      const answer34 = button34.getAttribute('data-answer');
        if (answer34 === 'b' && counted34<1) {
          counted34++
        } else {
          counted34= Math.max(counted34 - 1, 0); // Ensure count doesn't go below 1
        }
       // console.log(counted);
       updateCountValue()
    });
  });
  
//BUTTON 36

  buttons35.forEach(button35 => {
    button35.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button35 === previouslyClickedButton35) {
        button35.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton35 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton35) {
        previouslyClickedButton35.style.backgroundColor = ""; // Restore previous button's color
      }
      button35.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton35 = button35; 
     
      // Store the current button for future reference
      const answer35 = button35.getAttribute('data-answer');
        if (answer35 === 'a' && counted35<1) {
          counted35++
        } else {
          counted35= Math.max(counted35 - 1, 0); // Ensure count doesn't go below 1
        }
       // console.log(counted);
       updateCountValue()
    });
  });
  
//BUTTON 37

  buttons36.forEach(button36 => {
    button36.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button36 === previouslyClickedButton36) {
        button36.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton36 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton36) {
        previouslyClickedButton36.style.backgroundColor = ""; // Restore previous button's color
      }
      button36.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton36 = button36; 
     
      // Store the current button for future reference
      const answer36 = button36.getAttribute('data-answer');
        if (answer36 === 'c' && counted36<1) {
          counted36++
        } else {
          counted36= Math.max(counted36 - 1, 0); // Ensure count doesn't go below 1
        }
        //console.log(counted);
        updateCountValue()
    });
  });
  
//BUTTON 38
  buttons37.forEach(button37 => {
    button37.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button37 === previouslyClickedButton37) {
        button37.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton37 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton37) {
        previouslyClickedButton37.style.backgroundColor = ""; // Restore previous button's color
      }
      button37.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton37 = button37; 
     
      // Store the current button for future reference
      const answer37 = button37.getAttribute('data-answer');
        if (answer37 === 'c' && counted37<1) {
          counted37++
        } else {
          counted37= Math.max(counted37 - 1, 0); // Ensure count doesn't go below 1
        }
        //console.log(counted);
        updateCountValue()
    });
  });
  
//BUTTON 39

  buttons38.forEach(button38 => {
    button38.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button38 === previouslyClickedButton38) {
        button38.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton38 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton38) {
        previouslyClickedButton38.style.backgroundColor = ""; // Restore previous button's color
      }
      button38.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton38 = button38; 
     
      // Store the current button for future reference
      const answer38 = button38.getAttribute('data-answer');
        if (answer38 === 'd' && counted38<1) {
          counted38++
        } else {
          counted38= Math.max(counted38 - 1, 0); // Ensure count doesn't go below 1
        }
       // console.log(counted);
       updateCountValue()
    });
  });
  
//BUTTON 40

  buttons39.forEach(button39 => {
    button39.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button39 === previouslyClickedButton39) {
        button39.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton39 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton39) {
        previouslyClickedButton39.style.backgroundColor = ""; // Restore previous button's color
      }
      button39.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton39 = button; 
     
      // Store the current button for future reference
      const answer39 = button39.getAttribute('data-answer');
        if (answer39 === 'b' && counted39<1) {
          counted39++
        } else {
          counted39= Math.max(counted39 - 1, 0); // Ensure count doesn't go below 1
        }
      //  console.log(counted);
      updateCountValue()
    });
  });
  
//BUTTON 41

  buttons40.forEach(button40 => {
    button40.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button40 === previouslyClickedButton40) {
        button40.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton40 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton40) {
        previouslyClickedButton40.style.backgroundColor = ""; // Restore previous button's color
      }
      button40.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton40 = button40; 
     
      // Store the current button for future reference
      const answer40 = button40.getAttribute('data-answer');
        if (answer40 === 'd' && counted40<1) {
          counted40++
        } else {
          counted40= Math.max(counted40 - 1, 0); // Ensure count doesn't go below 1
        }
        //console.log(counted);
    });
  });
  
//BUTTON 42

  buttons41.forEach(button41 => {
    button41.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button41 === previouslyClickedButton41) {
        button41.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton41 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton41) {
        previouslyClickedButton41.style.backgroundColor = ""; // Restore previous button's color
      }
      button41.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton41 = button41; 
     
      // Store the current button for future reference
      const answer41 = button41.getAttribute('data-answer');
        if (answer41 === 'b' && counted41<1) {
          counted41++
        } else {
          counted41= Math.max(counted41 - 1, 0); // Ensure count doesn't go below 1
        }
       // console.log(counted);
       updateCountValue()
    });
  });
  
//BUTTON 43

  buttons42.forEach(button42 => {
    button42.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button42 === previouslyClickedButton42) {
        button42.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton42 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton42) {
        previouslyClickedButton42.style.backgroundColor = ""; // Restore previous button's color
      }
      button42.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton42 = button42; 
     
      // Store the current button for future reference
      const answer42 = button42.getAttribute('data-answer');
        if (answer42 === 'a' && counted42<1) {
          counted42++
        } else {
          counted42= Math.max(counted42 - 1, 0); // Ensure count doesn't go below 1
        }
        //console.log(counted);
        updateCountValue()
    });
  });
  
//BUTTON 44

  buttons43.forEach(button43 => {
    button43.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button43=== previouslyClickedButton43) {
        button43.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton43 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton43) {
        previouslyClickedButton43.style.backgroundColor = ""; // Restore previous button's color
      }
      button43.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton43 = button43; 
     
      // Store the current button for future reference
      const answer43 = button43.getAttribute('data-answer');
        if (answer43 === 'c' && counted43<1) {
          counted43++
        } else {
          counted43= Math.max(counted43 - 1, 0); // Ensure count doesn't go below 1
        }
        //console.log(counted);
        updateCountValue()
    });
  });
  
//BUTTON 45

  buttons44.forEach(button44 => {
    button44.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button44 === previouslyClickedButton44) {
        button44.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton44 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton44) {
        previouslyClickedButton44.style.backgroundColor = ""; // Restore previous button's color
      }
      button44.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton44 = button44; 
     
      // Store the current button for future reference
      const answer44 = button44.getAttribute('data-answer');
        if (answer44 === 'd' && counted44<1) {
          counted44++
        } else {
          counted44= Math.max(counted44 - 1, 0); // Ensure count doesn't go below 1
        }
     //   console.log(counted);
     updateCountValue()
    });
  });
  
//BUTTON 46

  buttons45.forEach(button45 => {
    button45.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button45 === previouslyClickedButton45) {
        button45.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton45 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton45) {
        previouslyClickedButton45.style.backgroundColor = ""; // Restore previous button's color
      }
      button45.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton45 = button45; 
     
      // Store the current button for future reference
      const answer45 = button45.getAttribute('data-answer');
        if (answer45 === 'b' && counted45<1) {
          counted45++
        } else {
          counted45= Math.max(counted45 - 1, 0); // Ensure count doesn't go below 1
        }
        //console.log(counted);
        updateCountValue()
    });
  });
  
//BUTTON 47

  buttons46.forEach(button46 => {
    button46.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button46 === previouslyClickedButton46) {
        button46.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton46 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton46) {
        previouslyClickedButton46.style.backgroundColor = ""; // Restore previous button's color
      }
      button46.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton46 = button46; 
     
      // Store the current button for future reference
      const answer46 = button46.getAttribute('data-answer');
        if (answer46 === 'c' && counted46<1) {
          counted46++
        } else {
          counted46= Math.max(counted46 - 1, 0); // Ensure count doesn't go below 1
        }
      //  console.log(counted);
      updateCountValue()
    });
  });
  
//BUTTON 48

  buttons47.forEach(button47 => {
    button47.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button47 === previouslyClickedButton47) {
        button47.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton47= null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton47) {
        previouslyClickedButton47.style.backgroundColor = ""; // Restore previous button's color
      }
      button47.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton47 = button47; 
     
      // Store the current button for future reference
      const answer47 = button47.getAttribute('data-answer');
        if (answer47 === 'a' && counted47<1) {
          counted47++
        } else {
          counted47= Math.max(counted47 - 1, 0); // Ensure count doesn't go below 1
        }
       // console.log(counted);
       updateCountValue()
    });
  });
  

//BUTTON 49

  buttons48.forEach(button48 => {
    button48.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button48 === previouslyClickedButton48) {
        button48.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton48 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton48) {
        previouslyClickedButton48.style.backgroundColor = ""; // Restore previous button's color
      }
      button48.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton48 = button48; 
     
      // Store the current button for future reference
      const answer48 = button48.getAttribute('data-answer');
        if (answer48 === 'd' && counted48<1) {
          counted48++
        } else {
          counted48= Math.max(counted48 - 1, 0); // Ensure count doesn't go below 1
        }
       // console.log(counted);
       updateCountValue()
    });
  });
  

//BUTTON 50

  buttons49.forEach(button49 => {
    button49.addEventListener("click", () => {
      
      // If this button was already clicked, return to default color
      if (button49 === previouslyClickedButton49) {
        button49.style.backgroundColor = ""; // Replace "" with your default color
        previouslyClickedButton49 = null;
       
        // Clear the stored button
        return;
      }
  
      // Highlight the current button
      if (previouslyClickedButton49) {
        previouslyClickedButton49.style.backgroundColor = ""; // Restore previous button's color
      }
      button49.style.backgroundColor = "lightblue"; // Or your desired highlight color
  
      previouslyClickedButton49 = button49; 
     
      // Store the current button for future reference
      const answer49 = button49.getAttribute('data-answer');
        if (answer49 === 'a' && counted49<1) {
          counted49++
        } else {
          counted49= Math.max(counted49 - 1, 0); // Ensure count doesn't go below 1
        }
       // console.log(counted);
       updateCountValue()
      
    });
  });
  


  
const updateCountValue=()=>{
  const Totalcount=counted+counted1+counted2+counted3+counted4+counted5+counted6+counted7+counted8+counted9+counted10+counted11
  +counted12+counted13+counted14+counted15+counted16+counted17+counted18+counted19+counted20+counted21+counted22+counted23+counted24+counted25+counted26
  +counted27+counted28+counted29+counted30+counted31+counted32+counted33+counted34+counted35+counted36+counted37+counted38+counted38+counted39+counted40
  +counted41+counted42+counted43+counted44+counted45+counted46+counted47+counted48+counted49
  console.log(Totalcount);
  return Totalcount;

}
let minutes = 29;
  let seconds = 60;
  
  // Add an element for hours
 
  const minutesSpan = document.getElementById('f-span');
 console.log(minutesSpan);
  const secondsSpan = document.getElementById('l-span');
  console.log(secondsSpan);


  
   
   const intervalId = setInterval(() => {
    seconds--; 
    
    if (seconds < 0) {
      minutes--;
      seconds = 59;
     
    }
  if(minutes<1 && seconds<11){
    minutesSpan.style.color='red'
    secondsSpan.style.color='red'
  }
   
  
    // Handle countdown completion (optional)
    if ( minutes === 0 && seconds === 0) {
      clearInterval(intervalId);
      const testingvalue=updateCountValue()
  localStorage.setItem('totalvalue', testingvalue);
window.location.href='/result'
  // Show loading overlay
  loadingOverlay.style.display = 'flex'; // Show the overlay

  // Set a delay of 4 seconds (4000 milliseconds)
  setTimeout(() => {
    // Redirect to the desired page after the delay
    window.location.href = '/result';
  }, 4000); // 4 seconds delay

      
    }
  
    updateDisplay();
  }, 1000);
  
  function updateDisplay() {
     // Add hours display
    minutesSpan.innerHTML = `${minutes}`;
    secondsSpan.innerHTML =`:${seconds}`;
  }
  
  });

  

const redirectButton = document.getElementById('submit-id');
const loadingOverlay = document.getElementById('loading-overlay');
redirectButton.addEventListener('click', () => {
 // const Totalcount = updateCountValue();
   // Call the function to get the total count
   const testingvalue=updateCountValue()
  localStorage.setItem('totalvalue', testingvalue);
window.location.href='/result'
  // Show loading overlay
  loadingOverlay.style.display = 'flex'; // Show the overlay

  // Set a delay of 4 seconds (4000 milliseconds)
  setTimeout(() => {
    // Redirect to the desired page after the delay
    window.location.href = '/result';
  }, 4000); // 4 seconds delay


});
//BUTTON 52


 












































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































  



































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































});





