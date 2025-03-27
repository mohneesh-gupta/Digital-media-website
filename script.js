'use strict';

// add event on multiple elements

const addEventOnElement = function (elements, evenType, callback){
    for (let i=0, len=elements.length; i<len; i++){
        document.addEventListener(evenType, callback);
    }
}

// navbar toggle for mobile

const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElement([navToggleBtn, overlay], "click", toggleNavbar);


// PARALLAX EFFECT

const parallexElements = document.querySelectorAll("[data-parallex]");

window.addEventListener("mousemove", event => {
    for(let i=0, len=parallexElements.length; i<len; i++){

        const movementX = (event.clientX / window.innerWidth) * Number(parallexElements[i].dataset.parallexSpeed);

        const movementY = (event.clientY / window.innerHeight) * Number(parallexElements[i].dataset.parallexSpeed);

        parallexElements[i].animate({
            transform : `translate(${movementX}px, ${movementY}px)`
        }, { duration : 500, fill: "forwards"});

    }
});


// THANKS -> by MOHNEESH GUPTA