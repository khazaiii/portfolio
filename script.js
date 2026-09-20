
const menu = document.querySelector(".mobile__menu");
const menuBtn = document.querySelector(".menu__btn");

menuBtn.addEventListener("click" , ()=>{
    menu.classList.toggle("active")
    menuBtn.classList.toggle("active");
})