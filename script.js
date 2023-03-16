'use strict';


const  navbar =document.querySelectorAll("[data-navbar]");
const  navbarlinks =document.querySelectorAll("[data-nav-link]");
const  menuToggleBtn =document.querySelector("[data-menu-toggle-btn]");


menuToggleBtn.addEventListener("click", function(){
    navbar.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++){
    navbarLinks[i].addEventListener("click")
}
