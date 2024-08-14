const navShow =() =>{
const burger =document.querySelector('.burger');
const links=document.querySelectorAll(".nav-links li");


const nav=document.querySelector('.nav-links');

burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
   
    links.forEach((link,index)=>{
if(link.style.animation)  {
    link.style.animation=``;
}
else{

    link.style.animation=`linksFade 0.5s ease forwards ${index/4}s`

}

})

burger.classList.toggle('close');

})

}
navShow();