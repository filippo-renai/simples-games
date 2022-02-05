//variabili delle azioni
var firePressed = false;
var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;
var musicPressed = false; //se false audio va
var soundPressed = false;
var pausePressed = false;
var clickPressed = false;
var startGame = false;


//controlli dell'azioni
function keyDownHandler(e) { //tasto premuto
   switch (e.key) {
      case "k":
         firePressed = true;
         break;
      case "a":
         leftPressed = true;
         break;
      case "d":
         rightPressed = true;
         break;
      case "w":
         upPressed = true;
         break;
      case "s":
         downPressed = true;
         break;
      case "Enter":
         if (startGame && gameOver){
             startGame = false;
             gameOver = false;
         }
         else startGame = true;
         break;
      case "m":
         if (musicPressed) musicPressed = false;
         else musicPressed = true;
         break;
      case "n":
         if (soundPressed) soundPressed = false;
         else soundPressed = true;
         break;
      case "p":
         if (pausePressed) pausePressed = false;
         else pausePressed = true;
         break;
   }
}

function keyUpHandler(e) { //tasto rilassiato
   switch (e.key) {
      case "k":
         firePressed = false;
         break;
      case "a":
         leftPressed = false;
         break;
      case "d":
         rightPressed = false;
         break;
      case "w":
         upPressed = false;
         break;
      case "s":
         downPressed = false;
         break;
   }
}

function clickDownHandler(e) { //click premuto
   if (e.button == 0) {
      if (menuScelta != 1) clickPressed = true;
   }
}

function clickUpHandler(e) { //click rilasciato
   if (e.button == 0) {
      if (menuScelta != 1) clickPressed = false;
   }
}

function mouseMoveHandler(e) { //posizione del mouse
   xMouse = e.clientX;
   yMouse = e.clientY;
}