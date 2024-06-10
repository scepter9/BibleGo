document.addEventListener("DOMContentLoaded",()=>{
    const submitform=document.getElementById('submitbutton')
    const inputis=document.getElementById('inputvalue')
    console.log(inputis);
    inputis.addEventListener('blur',()=>{
        const inputisvalue=inputis.value.trim();
        const textvalue=document.getElementById('errorvalue')
        const emailvalidation=/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
        if(inputisvalue===''){
           inputis.style.borderColor='red'
            inputis.classList.add('shake')
            setTimeout(() => inputis.classList.remove('shake'), 500);
            textvalue.innerHTML='Cannot be empty'
            textvalue.style.color='red'
        }else if(! emailvalidation.test(inputisvalue)){
            console.log('hy');
            inputis.style.borderColor='red'
            inputis.classList.add('shake')
            setTimeout(()=> inputis.classList.remove('shake'), 500);
            textvalue.innerHTML='invalid email format'
            textvalue.style.color='red'
        }else{
            inputis.style.borderColor='green'
            console.log('Hello world');
        }
    })
   submitform.addEventListener('submit',async(event)=>{
    event.preventDefault();
const formData=new formData(event.target);
const response = await fetch('/forgotpassword', {
    method: 'POST',
    body: formData,
  });
   });
})