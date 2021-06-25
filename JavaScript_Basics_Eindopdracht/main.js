let openMenu = document.querySelector(".menuIcon");

openMenu.addEventListener('click', activateMenu);

function activateMenu() {
    const toggleMenu = document.getElementById("myMenu");
    toggleMenu.classList.toggle("show");
};

const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");
const orange = document.querySelector(".orange");
const purple = document.querySelector(".purple");
const body = document.querySelector(".white-background");

red.addEventListener('click', changeBackgroundRed);

function changeBackgroundRed() {
    body.classList.remove("white-background", "blue-background", "orange-background", "yellow-background", "purple-background");
    body.classList.add("red-background");
    document.getElementById("colorReturn").innerHTML = 'This is: Red';
};

blue.addEventListener('click', changeBackgroundBlue);

function changeBackgroundBlue() {
    body.classList.remove("white-background", "red-background", "orange-background", "yellow-background", "purple-background");
    body.classList.add("blue-background");
    document.getElementById("colorReturn").innerHTML = 'This is: Blue';
};

yellow.addEventListener('click', changeBackgroundYellow);

function changeBackgroundYellow() {
    body.classList.remove("white-background", "red-background", "orange-background", "blue-background", "purple-background");
    body.classList.add("yellow-background");
    document.getElementById("colorReturn").innerHTML = 'This is: Yellow';
};

orange.addEventListener('click', changeBackgroundOrange);

function changeBackgroundOrange() {
    body.classList.remove("white-background", "red-background", "blue-background", "yellow-background", "purple-background");
    body.classList.add("orange-background");
    document.getElementById("colorReturn").innerHTML = 'This is: Orange';
};

purple.addEventListener('click', changeBackgroundPurple);

function changeBackgroundPurple() {
    body.classList.remove("white-background", "red-background", "orange-background", "yellow-background", "blue-background");
    body.classList.add("purple-background");
    document.getElementById("colorReturn").innerHTML = 'This is: Purple';
};
