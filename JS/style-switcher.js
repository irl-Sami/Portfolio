/*----------------------------------------Toggle style switcher--------------------------------------------*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// Hide style switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

/*----------------------------------------Theme Colours--------------------------------------------*/
const alternateStyles = document.querySelectorAll(".alternate-styles");

window.addEventListener("click", (event) => {
    if (event.target.classList.contains("colour-1")) {
        document.body.classList.toggle("red", true);
        document.body.classList.toggle("blue", false);
        document.body.classList.toggle("green", false);
        document.body.classList.toggle("white", false);
        document.body.classList.toggle("black", false);
    } else if (event.target.classList.contains("colour-2")) {
        document.body.classList.toggle("blue", true);
        document.body.classList.toggle("red", false);
        document.body.classList.toggle("green", false);
        document.body.classList.toggle("white", false);
        document.body.classList.toggle("black", false);
    } else if (event.target.classList.contains("colour-3")) {
        document.body.classList.toggle("green", true);
        document.body.classList.toggle("blue", false);
        document.body.classList.toggle("red", false);
        document.body.classList.toggle("white", false);
        document.body.classList.toggle("black", false);
    } else if (event.target.classList.contains("colour-4")) {
        document.body.classList.toggle("white", true);
        document.body.classList.toggle("blue", false);
        document.body.classList.toggle("green", false);
        document.body.classList.toggle("red", false);
        document.body.classList.toggle("black", false);
    } else if (event.target.classList.contains("colour-5")) {
        document.body.classList.toggle("black", true);
        document.body.classList.toggle("blue", false);
        document.body.classList.toggle("green", false);
        document.body.classList.toggle("white", false);
        document.body.classList.toggle("red", false);
    } 
})

/*----------------------------------------Theme Light & Dark Modes--------------------------------------------*/
const dayNight = document.querySelector(".day-night");

window.addEventListener("click", (event) => {
    if (event.target.classList.contains("fa-moon")) {
        document.body.classList.toggle("dark", true);
    }
});

window.addEventListener("click", (event) => {
    if (event.target.classList.contains("fa-sun")) {
        document.body.classList.toggle("dark", false);
    }
});

