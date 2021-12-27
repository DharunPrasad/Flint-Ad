"use strict"
const selection_container = document.querySelector(".selection-btn-container");
const card_container = document.querySelectorAll(".card-container");
const selection_buttons = document.querySelectorAll(".selection-btn-container button");
const navbar = document.querySelector("#navbar");
const navlink = document.querySelectorAll(".nav-link");
const darkmodeToggler = document.querySelector(".dark-mode-toggler")
const mainLogo = document.querySelector(".main-logo")

let textcontent;
selection_container.addEventListener("click",(e) =>{
    
    if(e.target.classList.contains("btn")){
        textcontent = e.target.textContent.toLowerCase();
        // Buttons color change while clicking
        selection_buttons.forEach(el => {
            el.classList.remove("active");
        })
        e.target.classList.add("active");

        //Card contents changing
        card_container.forEach((el) => {
            el.style.opacity = "0";
        })
        document.querySelector(`.card-${textcontent}`).style.opacity = "1";
    }
    // console.log(textcontent)

})

// Nav Function creation
const navRemoveFunc = (value) =>{
    navbar.classList.remove(`${value}`);
}

const navAddFunc = (value) => {
    navbar.classList.add(`${value}`);
}
darkmodeToggler.addEventListener("click", function(){
            
    
    if(darkmodeToggler.checked){
         //main logo
         mainLogo.src = "assets/2.png";
            //Nav bar
            navAddFunc("bg-dark");
            navbar.classList.remove("navbar-light");
            navbar.classList.add("navbar-dark");
            navAddFunc("text-light");
            
            // Nav link
            navlink.forEach(el => el.classList.add("text-light"))
    document.querySelectorAll(".body-style").forEach(el => {
        el.style.color = "#fff";
    })
    document.querySelectorAll(".card").forEach(el => {
        el.style.color = "#fff";
        el.classList.add("dark-blue")
    })
    document.body.style.backgroundColor = "#242b2e";


    }

    else{
         //main logo
         mainLogo.src = "assets/1.png";
        //  Navbar
        navRemoveFunc("bg-dark");
        navbar.classList.add("navbar-light");
        navbar.classList.remove("navbar-dark");
        navRemoveFunc("text-light");
         
         //Nav-link
         navlink.forEach(el => el.classList.remove("text-light"))

        document.querySelectorAll(".body-style").forEach(el => {
            el.style.color = "#000";
        })
        document.querySelectorAll(".card").forEach(el => {
            el.style.color = "#000";
            el.classList.remove("dark-blue")
        })
        document.body.style.backgroundColor = "#fff";
    }
})