"use strict"

const mainHeading = document.querySelector(".main-heading");
const tagLine = document.querySelector(".tag-line");

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

