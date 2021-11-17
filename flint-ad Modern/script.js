"use strict"

const mainHeading = document.querySelector(".main-heading");
const tagLine = document.querySelector(".tag-line");


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