document.addEventListener('DOMContentLoaded',()=>{
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
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
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

  const totalValue = localStorage.getItem('totalvalue');
  
  let changevalue=Number(totalValue)*2;
let finalanswer=changevalue;
console.log(finalanswer);
    document.getElementById('sign-out-model').style.display='none';
    fetch('/api/value')
  .then(response => response.json())
  .then(data => {
    const username = data.username;
const nameis=data.fullnameval
     // Access property directly
    console.log(username,nameis);
    const value=document.getElementById('userval')
    value.style.fontWeight='bolder'
    value.style.textTransform='capitalize'
    const secondvalue=document.getElementById('usernameinput')
    
    value.textContent=nameis
    secondvalue.textContent=username;
  })
    let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");
    remark=document.getElementById('remark-val')
    
    
   let fail=document.getElementById('fail-remark')
   let pass=document.getElementById('pass-remark')
   let brillant=document.getElementById('brillant-remark')
let progressStartValue = 0,    
    progressEndValue = finalanswer,    
    speed = 100;
    
let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);  

        if(progressEndValue<50){
            circularProgress.style.background=`conic-gradient(#e82a2a ${progressStartValue * 3.6}deg, #ededed 0deg)`
            remark.textContent='POOR!!'
            remark.style.color='red'
            fail.style.display='block'
        }else if(progressEndValue>50 && progressEndValue<70){
            circularProgress.style.background=`conic-gradient(#e8d52a ${progressStartValue * 3.6}deg, #ededed 0deg)`
            remark.textContent='GOOD'
            remark.style.color='orange'
            pass.style.display='block'
        }else{
            circularProgress.style.background=`conic-gradient(#2ae84a ${progressStartValue * 3.6}deg, #ededed 0deg)`
            remark.textContent='EXCELLENT!!'
            remark.style.color='green'
            brillant.style.display='block'
        }
    } 
    
}, speed);


document.getElementById('form-open').addEventListener('click',()=>{
    document.getElementById('sign-out-model').style.display='block';
  })
  const signout=document.getElementById('form-open')
  signout.addEventListener('click',()=>{
    document.getElementById('sign-out-model').style.display='block';
    signout.disabled=true;
  })
  const cancelbutton=document.getElementById('cancel-button')
  const signoutbutton=document.getElementById('sign-out-button')
  
  signoutbutton.addEventListener('click',()=>{
    signout.disabled=true;
    window.location.href='/logout'
  })
  cancelbutton.addEventListener('click',()=>{
    signout.disabled=true;
    
   // window.location.href='/result'
    document.getElementById('sign-out-model').style.display='none';
  })
})