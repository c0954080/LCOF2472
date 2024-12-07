// script.js
setTimeout(function() {
    document.getElementById('preloader').style.opacity = '0';
    document.getElementById('preloader').style.visibility = 'hidden';
    document.getElementById('content').style.display = 'block';
}, 1800); 


const hamburger = document.querySelector(".hamburger");
const nav_menu = document.querySelector(".navbar");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    nav_menu.classList.toggle("active");
})

document.querySelectorAll(".link").forEach(n => n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    nav_menu.classList.remove("active");
}))