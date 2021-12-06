"use strict";

const darkModeToggler = document.querySelector(".dark-mode-toggler");
const navbar = document.querySelector("#navbar");

darkModeToggler.addEventListener("click",function(){
    if(darkModeToggler.checked){
        document.body.style.backgroundColor = "#242B2E";
        document.querySelectorAll(".body-style").forEach(e => {
            e.style.color = "#fff";
        })
    }
    else{
        document.body.style.backgroundColor = "#fff";
        document.querySelectorAll(".body-style").forEach(e => {
            e.style.color = "#000";
        })
    }
})