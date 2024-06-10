document.addEventListener('DOMContentLoaded',()=>{
    const local=localStorage.getItem('emailvalue')
    const value=document.getElementById('span-id')
    value.textContent=local
})