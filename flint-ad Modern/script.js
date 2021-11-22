"use strict"

const mainHeading = document.querySelector(".main-heading");
const tagLine = document.querySelector(".tag-line");


const toggleBtn = document.querySelector(".checkbox");

const toggleMobBtn = document.querySelector(".checkbox-mob")

const togglebtnContainer = document.querySelector(".checkbox-container");

const togglebtnContainerMob = document.querySelector(".checkbox-container-mob")

const hamburger = document.querySelector(".mob-nav-btn");
const crossBtn = document.querySelector(".mobile-nav > span");
const mobNav = document.querySelector(".mobile-nav");

let bool1 = false;
let bool2 = false;

const removePropertyFunc = (property) =>{
    toggleBtn.style.removeProperty(`${property}`);
}

const removePropertyFucMob = (property) =>{
    toggleMobBtn.style.removeProperty(`${property}`)
}

togglebtnContainer.addEventListener("click", function(){
    bool1 = bool1 ? false : true
    console.log(bool1)


    if(bool1 === true){
        toggleBtn.style.position = "absolute";
        toggleBtn.style.right = "-3%";
        toggleBtn.style.top = "-5%";
       removePropertyFunc("left");

        document.body.style.backgroundColor = "#261C2C";

        document.body.style.color = "#fff";

        togglebtnContainer.style.border = "2px solid #fff"

        toggleBtn.style.backgroundColor = "#fff"
    }
    
    if(bool1 === false){
        toggleBtn.style.position = "absolute";
        toggleBtn.style.left = "-3%";
        toggleBtn.style.top = "-5%";


        document.body.style.backgroundColor = "#fff";

        document.body.style.color = "#000";
       

       removePropertyFunc("right");
       toggleBtn.style.backgroundColor = "#000";

       togglebtnContainer.style.border = "2px solid #000";


    }
    
})

togglebtnContainerMob.addEventListener("click", function(){
    bool2 = bool2 ? false : true
    console.log(bool2)


    if(bool2){
        toggleMobBtn.style.position = "absolute";
        toggleMobBtn.style.right = "-3%";
        toggleMobBtn.style.top = "-5%";
        removePropertyFucMob("left");

        document.body.style.backgroundColor = "#261C2C";

        document.body.style.color = "#fff";

        togglebtnContainerMob.style.border = "2px solid #fff"

        toggleMobBtn.style.backgroundColor = "#fff"

        document.querySelectorAll(".mob-nav-btn > span").forEach(btn => btn.style.backgroundColor = "#fff")
    }
    
    if(bool2 === false){
        toggleMobBtn.style.position = "absolute";
        toggleMobBtn.style.left = "-3%";
        toggleMobBtn.style.top = "-5%";


        document.body.style.backgroundColor = "#fff";

        document.body.style.color = "#000";
       

        removePropertyFucMob("right");
       toggleMobBtn.style.backgroundColor = "#fff";

       togglebtnContainerMob.style.border = "2px solid #fff";

       document.querySelectorAll(".mob-nav-btn > span").forEach(btn => btn.style.backgroundColor = "#000")


    }
    
})



const gridContent = document.querySelectorAll(".grid-content");
const serviceBtn = document.querySelectorAll(".service-button");
mainHeading.style.opacity = "0";
tagLine.style.opacity = "0";

mainHeading.style.transform = "translateX(-10%)";
tagLine.style.transform = "translateX(10%)";

// mainHeading.classList.add("main-heading-animation");
// mainHeading.style.opacity = "1";
// mainHeading,style.transform = "translateX(0)";

// tagLine.classList.add("tagline-animation");
// tagLine.style.opacity = "1"
// ta.style.transform = "translateX(0)";

setTimeout(function(){
mainHeading.classList.add("main-heading-animation");
tagLine.classList.add("main-heading-animation")

},9000)

gridContent.forEach((content,i )=> {
    content.addEventListener("mouseover",function(){
       document.querySelector(`.service-button-${i+1}`).style.opacity = "1"
    })

    content.addEventListener("mouseout", function(){
        serviceBtn.forEach(btn => btn.style.opacity = "0")
    })
})



// Mobile navigation
hamburger.addEventListener("click",function(){
    mobNav.style.transform = "translateX(0)";
})

crossBtn.addEventListener("click", function(){
    mobNav.style.transform = "translateX(100%)";

})