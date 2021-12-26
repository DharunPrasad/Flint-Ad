"use strict"

// Caro buttons
const leftBtn = document.querySelector(".left-control");
const rightBtn = document.querySelector(".right-control");

// content selection 
const caro1 = document.querySelector(".caro-1")
const caro2 = document.querySelector(".caro-2")
const caro3 = document.querySelector(".caro-3")
const caro4 = document.querySelector(".caro-4")

// hidding FUnctions
const caro1_hidden = () =>{
    caro1.style.opacity = "0";
}
const caro2_hidden = () =>{
    caro2.style.opacity = "0";
}
const caro3_hidden = () =>{
    caro3.style.opacity = "0";
}
const caro4_hidden = () =>{
    caro4.style.opacity = "0";
}

// Visibling functions
const caro1_visible = () =>{
    caro1.style.opacity = "1";
}
const caro2_visible = () =>{
    caro2.style.opacity = "1";
}
const caro3_visible = () =>{
    caro3.style.opacity = "1";
}
const caro4_visible = () =>{
    caro4.style.opacity = "1";
}


let count = 0;

// Main clicking function
const caroFadingEffect = () => {
    if(count === 0){
        caro1_visible();
        caro2_hidden();
        caro3_hidden();
        caro4_hidden();
    }

    if(count === 1){
        caro1_hidden();
        caro2_visible();
        caro3_hidden();
        caro4_hidden();
    }

    if(count === 2){
        caro1_hidden();
        caro2_hidden();
        caro3_visible();
        caro4_hidden();
    }

    if(count === 3){
        caro1_hidden();
        caro2_hidden();
        caro3_hidden();
        caro4_visible();
    }
}


rightBtn.addEventListener("click", function(){
    count++
    if(count === 4){
        count = 0;
    }
    caroFadingEffect()
  
 
})

leftBtn.addEventListener("click", function(){
    count--;
    if(count === -1){
        count = 3;
    }

    caroFadingEffect();

})