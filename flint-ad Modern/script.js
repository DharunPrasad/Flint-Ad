"use strict"

const mainHeading = document.querySelector(".main-heading");
const tagLine = document.querySelector(".tag-line");


const toggleBtn = document.querySelector(".checkbox");

const togglebtnContainer = document.querySelector(".checkbox-container");

let bool = false;

const removePropertyFunc = (property) =>{
    toggleBtn.style.removeProperty(`${property}`);
}
togglebtnContainer.addEventListener("click", function(){
    bool = bool ? false : true
    console.log(bool)


    if(bool === true){
        toggleBtn.style.position = "absolute";
        toggleBtn.style.right = "-3%";
        toggleBtn.style.top = "-5%";
       removePropertyFunc("left");

        document.body.style.backgroundColor = "#261C2C";

        document.body.style.color = "#fff";

        togglebtnContainer.style.border = "2px solid #fff"

        toggleBtn.style.backgroundColor = "#fff"
    }
    
    if(bool === false){
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



