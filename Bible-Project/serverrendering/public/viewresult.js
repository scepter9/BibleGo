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
    document.getElementById('sign-out-model').style.display='none';
    const backToTopButton = document.getElementById("backToTop");
  
  backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
   
  
   
        //OOA0FN
        //GS3#4rre@!
        
      //  console.log(verkey); // Dot notation
        // Use verkey for frontend operations
  
      
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
      
    } else {
      nextval.style.display = 'block';
       // Changed from 'hide' to 'none'
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
 let val1=document.getElementById('one')
 let val2=document.getElementById('two')
 let val3=document.getElementById('three')
 let val4=document.getElementById('four')
 let val5=document.getElementById('five')
 let val6=document.getElementById('six')
 let val7=document.getElementById('seven')
 let val8=document.getElementById('eight')
 let val9=document.getElementById('nine')
 let val10=document.getElementById('ten')
 let val11=document.getElementById('eleven')
 let val12=document.getElementById('twelve')
 let val13=document.getElementById('thirteen')
 let val14=document.getElementById('fourteen')
 let val15=document.getElementById('fifteen')
 let val16=document.getElementById('first16')
 let val17=document.getElementById('first17')
 let val18=document.getElementById('first18')
 let val19=document.getElementById('first19')
 let val20=document.getElementById('first20')
 let val21=document.getElementById('first21')
 let val22=document.getElementById('first22')
 let val23=document.getElementById('first23')
 let val24=document.getElementById('first24')
 let val25=document.getElementById('first25')
 let val26=document.getElementById('first26')
 let val27=document.getElementById('first27')
 let val28=document.getElementById('first28')
 let val29=document.getElementById('first29')
 let val30=document.getElementById('first30')
 let val31=document.getElementById('first31')
 let val32=document.getElementById('first32')
 let val33=document.getElementById('first33')
 let val34=document.getElementById('first34')
 let val35=document.getElementById('first35')
 let val36=document.getElementById('first36')
 let val37=document.getElementById('first37')
 let val38=document.getElementById('first38')
 let val39=document.getElementById('first39')
 let val40=document.getElementById('first40')
 let val41=document.getElementById('first41')
 let val42=document.getElementById('first42')
 let val43=document.getElementById('first43')
 let val44=document.getElementById('first44')
 let val45=document.getElementById('first45')
 let val46=document.getElementById('first46')
 let val47=document.getElementById('first47')
 let val48=document.getElementById('first48')
 let val49=document.getElementById('first49')
 let val50=document.getElementById('first50')
 




 val1.style.backgroundColor='lightgreen'
 val2.style.backgroundColor='lightgreen'
 val3.style.backgroundColor='lightgreen'
 val4.style.backgroundColor='lightgreen'
 val5.style.backgroundColor='lightgreen'
 val6.style.backgroundColor='lightgreen'
 val7.style.backgroundColor='lightgreen'
 val8.style.backgroundColor='lightgreen'
 val9.style.backgroundColor='lightgreen'
 val10.style.backgroundColor='lightgreen'
 val11.style.backgroundColor='lightgreen'
 val12.style.backgroundColor='lightgreen'
 val13.style.backgroundColor='lightgreen'
 val14.style.backgroundColor='lightgreen'
 val15.style.backgroundColor='lightgreen'
 val16.style.backgroundColor='lightgreen'
 val17.style.backgroundColor='lightgreen'
 val18.style.backgroundColor='lightgreen'
 val19.style.backgroundColor='lightgreen'
 val20.style.backgroundColor='lightgreen'
 val21.style.backgroundColor='lightgreen'
 val22.style.backgroundColor='lightgreen'
 val23.style.backgroundColor='lightgreen'
 val24.style.backgroundColor='lightgreen'
 val25.style.backgroundColor='lightgreen'
 val26.style.backgroundColor='lightgreen'
 val27.style.backgroundColor='lightgreen'
 val28.style.backgroundColor='lightgreen'
 val29.style.backgroundColor='lightgreen'
 val30.style.backgroundColor='lightgreen'
 val31.style.backgroundColor='lightgreen'
 val32.style.backgroundColor='lightgreen'
 val33.style.backgroundColor='lightgreen'
 val34.style.backgroundColor='lightgreen'
 val35.style.backgroundColor='lightgreen'
 val36.style.backgroundColor='lightgreen'
 val37.style.backgroundColor='lightgreen'
 val38.style.backgroundColor='lightgreen'
 val39.style.backgroundColor='lightgreen'
 val40.style.backgroundColor='lightgreen'
 val41.style.backgroundColor='lightgreen'
 val42.style.backgroundColor='lightgreen'
 val43.style.backgroundColor='lightgreen'
 val44.style.backgroundColor='lightgreen'
 val45.style.backgroundColor='lightgreen'
 val46.style.backgroundColor='lightgreen'
 val47.style.backgroundColor='lightgreen'
 val48.style.backgroundColor='lightgreen'
 val49.style.backgroundColor='lightgreen'
 val50.style.backgroundColor='lightgreen'
  
  
  
  
})