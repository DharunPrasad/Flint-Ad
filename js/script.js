"use strict";

const darkModeToggler = document.querySelector(".dark-mode-toggler");
const navbar = document.querySelector("#navbar");
const navlink = document.querySelectorAll(".nav-link");
const serviceBox_front = document.querySelectorAll(".front-side");
const servicesBox_back = document.querySelectorAll(".back-side");
const vision_para = document.querySelectorAll(".profile-container p");
const mainLogo = document.querySelector(".main-logo");
const muteBtn = document.querySelector(".mute-container");
const muteBtnSrc = document.querySelector(".mute-container img")

const mob_desk = document.querySelector(".bg-video-desk > video");
const mob_video = document.querySelector(".bg-video-mob  > video");
// Nav Function creation
const navRemoveFunc = (value) =>{
    navbar.classList.remove(`${value}`);
}

const navAddFunc = (value) => {
    navbar.classList.add(`${value}`);
}
navlink.forEach(el => el.classList.add("text-light"))
navbar.classList.add("navbar-dark");


// Mute button
muteBtn.addEventListener("click",function(){
muteBtnSrc.src = "assets/unmute.png";
if(mob_desk.muted === false && mob_video.muted === false){
    mob_desk.muted = true;
    mob_video.muted = true;
    muteBtnSrc.src = "assets/mute.png";

}
else{
    mob_desk.muted = false;
    mob_video.muted = false;
    muteBtnSrc.src = "assets/unmute.png";

}
})


window.addEventListener("load", function(){

    if(darkModeToggler.checked){
        document.body.style.backgroundColor = "#242B2E";
        document.querySelectorAll(".body-style").forEach(e => {
            e.style.color = "#fff";
            //main logo
            mainLogo.src = "assets/2.png";

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
    // if(mob_desk)
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
                //main logo
                mainLogo.src = "assets/2.png";
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
// main logo
mainLogo.src = "assets/1.png";

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
    navlink.forEach(el => el.classList.remove("text-light"))
    navbar.classList.remove("navbar-dark");

    document.querySelector("#flexSwitchCheckDefault").style.visibility= "visible";


    mainLogo.src = "assets/1.png"

    if(darkModeToggler.checked){
    navbar.classList.add("bg-dark");
    navbar.classList.remove("bg-transperant");
    mainLogo.src = "assets/2.png"
    navlink.forEach(el => el.classList.add("text-light"))
    navbar.classList.add("navbar-dark");



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
    document.querySelector("#flexSwitchCheckDefault").style.visibility = "hidden";

    navlink.forEach(el => el.classList.add("text-light"))
    navbar.classList.add("navbar-dark");

    mainLogo.src = "assets/2.png"
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
const companyName = document.querySelector("#inputCompany");
const firstName = document.querySelector("#inputFirstname");
const lastName = document.querySelector("#inputLastname");
const senderEamil = document.querySelector("#inputEmail");
const senderPhone = document.querySelector("#inputPhone");
const message = document.querySelector("#inputMessage");

submitBtn.addEventListener("click", function(e){
    e.preventDefault()
    const obj = {
        from_firstname : firstName.value,
        from_lastname : lastName.value,
        companyName : companyName.value,
        emailid : senderEamil.value,
        phoneNo : senderPhone.value,
        message : message.value
    }
    emailjs.send("service_0cn034q", "template_sdpg2s1", obj).then(function(res){
        console.log("success",res.status)
        alert("We will Get back to you shortly")
    });
})