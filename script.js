"use strict";
const nav = document.querySelector(".nav-bar");
const primaryHeading = document.querySelector(".primary-heading")
const secondaryHeading = document.querySelector(".secondary-container");
const headingQuote = document.querySelector(".heading-quote");
const secondaryTitle = document.querySelectorAll(".secondary-title");
const secondaryDetails = document.querySelectorAll(".secondary-details");
const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const section3 = document.querySelector(".section3");
const section4 = document.querySelector(".section4")


const gridSection = document.querySelector(".secondary-main-about-us-section");
const photoDisplaySection = document.querySelector(".photo-display-section")
const primaryBlogSection = document.querySelector(".primary-blog-section");
const secondaryBlogSection = document.querySelector(".secondary-blog-section")
const careerContainer = document.querySelector(".career-container");
const socialMedia = document.querySelector(".social-media");


const section1Title = document.querySelector(".section1-title");
const section1Detail = document.querySelector(".section1-detail")
const section2Title = document.querySelector(".section2-title")
const section2Detail = document.querySelector(".section2-detail")
const section3Title = document.querySelector(".section3-title")
const section3Detail = document.querySelector(".section3-detail")
const section4Title = document.querySelector(".section4-title");
const section4Detail = document.querySelector(".section4-detail");
// Sections
const heroSection = document.querySelector(".hero-section");


// Adding animation classes using javascript
nav.classList.add("nav-towards-down");
primaryHeading.classList.add("towards-right")
secondaryHeading.classList.add("towards-left");
headingQuote.classList.add("towards-up")

// hero section intersection api
const heroCallback = function(entries, observer){
    const [entry] = entries;
    console.log(entry)
    if(!entry.isIntersecting) return

    nav.classList.remove("nav-towards-down");
    primaryHeading.classList.remove("towards-right")
    secondaryHeading.classList.remove("towards-left");
    headingQuote.classList.remove("towards-up")

observer.unobserve(heroSection)
    
}
const heroObserver = new IntersectionObserver(heroCallback,{
    root : null,
    threshold : .2
})

heroObserver.observe(heroSection);

// Adding class using js
secondaryTitle.forEach(el => el.classList.add("towards-right"));
secondaryDetails.forEach(el => el.classList.add("towards-left"))
gridSection.classList.add("towards-up")
photoDisplaySection.classList.add("towards-up");
primaryBlogSection.classList.add("towards-right");
secondaryBlogSection.classList.add("towards-left");
careerContainer.classList.add("towards-right");
socialMedia.classList.add("towards-left");


// api for sections

// Callback
const section1Callback = function(entries,observer){
    entries.forEach(entry => {
        console.log(entry);


    if(!entry.isIntersecting) return


   section1Title.classList.remove("towards-right")
   section1Detail.classList.remove("towards-left")
   
//    observer.unobserve(entry.target)
if(entry.intersectionRatio > .4){
    gridSection.classList.remove("towards-up")
    observer.unobserve(entry.target)
}
})
}

const section1Observer = new IntersectionObserver(section1Callback, {
    root : null,
    threshold : [.2,.41],
});

section1Observer.observe(section1)


// Section 2

const section2Callback = function(entries, observer){
    entries.forEach(entry => {
        console.log(entry)

        if(!entry.isIntersecting) return

   section2Title.classList.remove("towards-right")
   section2Detail.classList.remove("towards-left")
   
//    observer.unobserve(entry.target)
if(entry.intersectionRatio > .4){
    photoDisplaySection.classList.remove("towards-up")
    observer.unobserve(entry.target)
}
    })
}
const section2Observer = new IntersectionObserver(section2Callback,{
    root : null,
    threshold : [.2, .41],
})

section2Observer.observe(section2)


// Section3

const section3Callback = function(entries, observer){
    entries.forEach(entry => {
        console.log(entry)

        if(!entry.isIntersecting) return

   section3Title.classList.remove("towards-right")
   section3Detail.classList.remove("towards-left")
   
//    observer.unobserve(entry.target)
if(entry.intersectionRatio > .4){
    primaryBlogSection.classList.remove("towards-right");
secondaryBlogSection.classList.remove("towards-left");
    observer.unobserve(entry.target)
}
    })
}
const section3Observer = new IntersectionObserver(section3Callback,{
    root : null,
    threshold : [.2, .41],
})

section3Observer.observe(section3)

// Section4
const section4Callback = function(entries, observer){
    entries.forEach(entry => {
        console.log(entry)

        if(!entry.isIntersecting) return

   section4Title.classList.remove("towards-right")
   section4Detail.classList.remove("towards-left")
   
//    observer.unobserve(entry.target)
if(entry.intersectionRatio > .4){
    careerContainer.classList.remove("towards-right");
    socialMedia.classList.remove("towards-left");
    observer.unobserve(entry.target)
}
    })
}
const section4Observer = new IntersectionObserver(section4Callback,{
    root : null,
    threshold : [.2, .41],
})

section4Observer.observe(section4)


// window.addEventListener("wheel",function(e){
//     console.log(e)
//     if(e.deltaY > 0){
//         nav.style.opacity = "1";
//     }
//     else{
//         nav.style.opacity = "0";
//     }

//     if(e.target.classList.contains("hero-section")){
//         nav.style.opacity = "1";
//     }
// })