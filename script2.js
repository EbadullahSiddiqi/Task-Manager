const body = document.querySelector("body");
const slider = document.querySelector(".slider");
const theme = document.querySelector(".theme-popup");
const logo = document.querySelector(".logo");
const logoCircle = document.querySelector(".circle");
const navBar = document.querySelector(".nav-bar");
const themeOpt = document.querySelector(".theme");
const themePopup = document.querySelector(".theme-popup");
const closer = document.querySelector(".closer");
const addTaskHeading = document.querySelector(".add-task-heading");
const displayHeading = document.querySelector(".display-heading");
const task = document.querySelector(".task");
const options = document.querySelector(".option");
var currentTheme = true;
// localStorage.setItem("theme", "purple");

// Theme Popup
themeOpt.addEventListener("click", function() {
    themePopup.style.display = "flex";
});

// Theme Popup Close
closer.addEventListener("click", function() {
    themePopup.style.display = "none";
});

// To change the Theme of the App

function changeTheme() {
    if (localStorage.getItem("theme") === "purple" || currentTheme) {
            body.style.backgroundColor = "gray";
            navBar.style.backgroundColor = "#000000c6";
            logo.style.color = "rgb(136, 15, 15)";
            logoCircle.style.backgroundColor = "rgb(136, 15, 15)";
            logoCircle.style.color = "white";
            display.style.backgroundColor = "#000000d4";
            addTask.style.backgroundColor = "#000000c6"; 
            addTaskHeading.style.color = "gray";
            displayHeading.style.color = "whitesmoke";
            options.style.backgroundColor = "#000000d4";
            themeOpt.style.backgroundColor = "#000000d4";
            options.style.color = "rgb(136, 15, 15)";
            themeOpt.style.color = "rgb(136, 15, 15)";
            // task.style.backgroundColor = "white";
            currentTheme = !currentTheme;
            localStorage.setItem("theme", "red");
    }
     else if (localStorage.getItem("theme") === "red" || !currentTheme) {
            body.style.backgroundColor = "";
            navBar.style.backgroundColor = "white";
            logo.style.color = "rgb(221, 40, 221)";
            logoCircle.style.backgroundColor = "rgb(221, 40, 221)";
            logoCircle.style.color = "white";
            display.style.backgroundColor = "rgba(42, 39, 39, 0.08)";
            addTask.style.backgroundColor = "whitesmoke"; 
            addTaskHeading.style.color = "rgba(0, 0, 0, 0.757)";
            displayHeading.style.color = "rgba(0, 0, 0, 0.757)";
            options.style.backgroundColor = "whitesmoke";
            themeOpt.style.backgroundColor = "whitesmoke";
            options.style.color = "rgb(221, 40, 221)";
            themeOpt.style.color = "rgb(221, 40, 221)";
            currentTheme = !currentTheme;
            localStorage.setItem("theme", "purple");
    }
};

slider.addEventListener("click", () => {
    changeTheme();
});

window.addEventListener("load", () => {
    if (localStorage.getItem("theme") === "purple") {
        body.style.backgroundColor = "";
        navBar.style.backgroundColor = "white";
        logo.style.color = "rgb(221, 40, 221)";
        logoCircle.style.backgroundColor = "rgb(221, 40, 221)";
        logoCircle.style.color = "white";
        display.style.backgroundColor = "rgba(42, 39, 39, 0.08)";
        addTask.style.backgroundColor = "whitesmoke"; 
        addTaskHeading.style.color = "rgba(0, 0, 0, 0.757)";
        displayHeading.style.color = "rgba(0, 0, 0, 0.757)";
        options.style.backgroundColor = "whitesmoke";
        themeOpt.style.backgroundColor = "whitesmoke";
        options.style.color = "rgb(221, 40, 221)";
        themeOpt.style.color = "rgb(221, 40, 221)";
        localStorage.setItem("theme", "purple");
    }
    else if (localStorage.getItem("theme") === "red") {
        body.style.backgroundColor = "gray";
        navBar.style.backgroundColor = "#000000c6";
        logo.style.color = "rgb(136, 15, 15)";
        logoCircle.style.backgroundColor = "rgb(136, 15, 15)";
        logoCircle.style.color = "white";
        display.style.backgroundColor = "#000000d4";
        addTask.style.backgroundColor = "#000000c6"; 
        addTaskHeading.style.color = "gray";
        displayHeading.style.color = "whitesmoke";
        options.style.backgroundColor = "#000000d4";
        themeOpt.style.backgroundColor = "#000000d4";
        options.style.color = "rgb(136, 15, 15)";
        themeOpt.style.color = "rgb(136, 15, 15)";
        // task.style.backgroundColor = "white";
        localStorage.setItem("theme", "red");
    }
});