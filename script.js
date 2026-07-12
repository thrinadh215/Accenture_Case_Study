const hamb=document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");

hamb.addEventListener('click',()=>{
    menu.classList.toggle("active");
})