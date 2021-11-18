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




const done = document.querySelector(".doneBtn");
const form = document.querySelector(".form-container");
const completed = document.querySelector(".completed");
const completedSpan = document.querySelector(".completed-span");
const completedPara = document.querySelector(".completed-para")
const completedImg = document.querySelector(".circle-checked");
const inputTags = document.querySelectorAll(".input-tag");

const nameForm = document.querySelector(".name-form");
const emailForm = document.querySelector(".email-form");
const phoneForm = document.querySelector(".phone-form");
const messageForm = document.querySelector(".message-form")





done.addEventListener("click",function(e){
    e.preventDefault()
    if(messageForm.value.length < 50){
      label.textContent = "Enter more than 50 Characters";
      label.style.color = "#ff0000";
    }


    if(nameForm.value.length >= 1 && emailForm.checkValidity() && !isNaN(Number(phoneForm.value))&&  messageForm.value.length > 10){
completed.style.opacity = "1";
form.style.opacity = "0";

completed.style.zIndex = "10";
form.style.zIndex = "-10"

setTimeout(function(){
    completedSpan.style.opacity = "1";
    completedPara.style.opacity ="1";
},500)


completedImg.classList.add("circle-animation");
completedImg.style.transform = `scale(1) translateX(0)`;

inputTags.forEach(input => {
  input.value = ""

});

    }
 
})