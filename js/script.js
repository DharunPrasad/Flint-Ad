"use strict";

const darkModeToggler = document.querySelector(".dark-mode-toggler");
const navbar = document.querySelector("#navbar");
const navlink = document.querySelectorAll(".nav-link");
const serviceBox_front = document.querySelectorAll(".front-side");
const servicesBox_back = document.querySelectorAll(".back-side");
const vision_para = document.querySelectorAll(".profile-container p");
// Nav Function creation
const navRemoveFunc = (value) =>{
    navbar.classList.remove(`${value}`);
}

const navAddFunc = (value) => {
    navbar.classList.add(`${value}`);
}

window.addEventListener("load", function(){
    if(darkModeToggler.checked){
        document.body.style.backgroundColor = "#242B2E";
        document.querySelectorAll(".body-style").forEach(e => {
            e.style.color = "#fff";
    
            //Nav bar
            navAddFunc("bg-dark");
            navbar.classList.remove("navbar-light");
            navbar.classList.add("navbar-dark");
            navAddFunc("text-light");
            
            // Nav link
            navlink.forEach(el => el.classList.add("text-light"))
    
            //Services
            serviceBox_front.forEach(el => {
                el.classList.remove("bg-light");
                el.classList.add("dark-blue");
                el.classList.add("text-light");
            })
    
            servicesBox_back.forEach(el => {
                el.classList.remove("bg-light");
                el.classList.add("dark-blue");
                el.classList.add("text-light");
            })
    
            //Vision and mission
            document.querySelectorAll(".aboutus-section .card").forEach(el => {
                el.classList.add("dark-blue")
            })
        })
    }
})


darkModeToggler.addEventListener("click",function(){
    if(darkModeToggler.checked){
        document.body.style.backgroundColor = "#242B2E";
        document.querySelectorAll(".body-style").forEach(e => {
            e.style.color = "#fff";

            //Nav bar
            navAddFunc("bg-dark");
            navbar.classList.remove("navbar-light");
            navbar.classList.add("navbar-dark");
            navAddFunc("text-light");
            
            // Nav link
            navlink.forEach(el => el.classList.add("text-light"))

            //Services
            serviceBox_front.forEach(el => {
                el.classList.remove("bg-light");
                el.classList.add("dark-blue");
                el.classList.add("text-light");
            })

            servicesBox_back.forEach(el => {
                el.classList.remove("bg-light");
                el.classList.add("dark-blue");
                el.classList.add("text-light");
            })

               //Vision and mission
               document.querySelectorAll(".aboutus-section .card").forEach(el => {
                el.classList.add("dark-blue")
            })
        })
    }
    else{
        document.body.style.backgroundColor = "#fff";
        document.querySelectorAll(".body-style").forEach(e => {
            e.style.color = "#000";

                //  Navbar
                navRemoveFunc("bg-dark");
               navbar.classList.add("navbar-light");
               navbar.classList.remove("navbar-dark");
               navRemoveFunc("text-light");
                
                //Nav-link
                navlink.forEach(el => el.classList.remove("text-light"))
            })
            
            // Services
            serviceBox_front.forEach(el => {
                el.classList.add("bg-light");
                el.classList.remove("dark-blue");
                el.classList.remove("text-light");
            })
            servicesBox_back.forEach(el => {
                el.classList.add("bg-light");
                el.classList.remove("dark-blue");
                el.classList.remove("text-light");
            })

            //Vision and mission
            document.querySelectorAll(".aboutus-section .card").forEach(el => {
                el.classList.remove("dark-blue")
            })


    }
})


// Revieling the sections
const section = document.querySelector(".intro-section");
// navbar.style.transform = "translateY(-100%)";
const revobsCallback = (entries,observer) => {
  const [entry] = entries;
//   if(!entry.isIntersecting) return

if(!entry.isIntersecting){
    // observer.unobserve(entry.target);
    // navbar.style.transform = "translateY(0)";

    if(darkModeToggler.checked){
    navbar.classList.add("bg-dark");
    navbar.classList.remove("bg-transperant");
    }

    if(!darkModeToggler.checked){
        navbar.classList.add("bg-light");
        navbar.classList.remove("bg-transperant");
    }
    
    darkModeToggler.addEventListener("click",function(){
        if(darkModeToggler.checked){
            navbar.classList.remove("bg-light");
            navbar.classList.add("bg-dark")
            navbar.classList.remove("bg-transperant");
        }
        else{
            navbar.classList.add("bg-light");
            navbar.classList.remove("bg-dark")
            navbar.classList.remove("bg-transperant");
        }
    })
}

if(entry.isIntersecting){
    // navbar.style.transform = "translateY(-100%)";
    navbar.classList.remove("bg-light");
    navbar.classList.remove("bg-dark")
    navbar.classList.add("bg-transperant");

    darkModeToggler.addEventListener("click",function(){
        if(darkModeToggler.checked){
            navbar.classList.remove("bg-light");
            navbar.classList.remove("bg-dark")
            navbar.classList.add("bg-transperant");
        }
        else{
            navbar.classList.remove("bg-light");
            navbar.classList.remove("bg-dark")
            navbar.classList.add("bg-transperant");
        }
    })

}
// console.log(entry)

}

const revielingSectionObserver = new IntersectionObserver(revobsCallback,{
  root : null,
  threshold :[0,.8]
})

revielingSectionObserver.observe(section);


// Email js
const submitBtn = document.querySelector("#submit-btn");
const companyName = document.querySelector("inputCompany");
const firstName = document.querySelector("#inputFirstname");
const lastName = document.querySelector("#inputLastname");
const senderEamil = document.querySelector("#inputEmail");
const senderPhone = document.querySelector("#inputPhone");
const message = document.querySelector("#inputMessage");

submitBtn.addEventListener("click", function(){
    const obj = {
        from_firstname : firstName.value,
        from_lastname : lastName.value,
        companyName : companyName.value,
        emailid : senderEamil,
        phoneNo : phoneNo,
    }
    emailjs.send("service_hwd0i8o");
})