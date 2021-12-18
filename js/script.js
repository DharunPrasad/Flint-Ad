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
            vision_para.forEach(el => {
                el.classList.remove("bg-light");
                el.classList.add("text-light");
                el.classList.add("bg-dark");
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
            vision_para.forEach(el => {
                el.classList.add("bg-light");
                el.classList.remove("text-light");
                el.classList.remove("bg-dark");
            })


    }
})


// Revieling the sections
const section = document.querySelector(".intro-section");
navbar.style.transform = "translateY(-100%)";
const revobsCallback = (entries,observer) => {
  const [entry] = entries;
//   if(!entry.isIntersecting) return

if(!entry.isIntersecting){
    // observer.unobserve(entry.target);
    navbar.style.transform = "translateY(0)";

    console.log(entry)
}

if(entry.isIntersecting){
    navbar.style.transform = "translateY(-100%)";
}
// console.log(entry)

}

const revielingSectionObserver = new IntersectionObserver(revobsCallback,{
  root : null,
  threshold :[0,1]
})

revielingSectionObserver.observe(section);
