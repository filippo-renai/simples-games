//main del gioco
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var menuScelta = 0;
const FPS = 60; // frames per secondo
//posizione del mouse
var xMouse; 
var yMouse;

function main() {
    sound();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (menuScelta == 0) menu();
    if (menuScelta == 1) gioco();
    if (menuScelta == 2) controlli();
    if (menuScelta == 3) crediti();
}
setInterval(main,1000 / FPS);

//eventi
document.addEventListener("keydown",keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
canvas.addEventListener("mousedown", clickDownHandler,false);
canvas.addEventListener("mouseup", clickUpHandler,false);
canvas.addEventListener("mousemove", mouseMoveHandler, false);