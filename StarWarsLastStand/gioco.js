/*
   PROGRAMMATO DA FILIPPO RENAI
*/
//tutto il gioco 
//const rateo = 700; //rateo della nostra nave in mille secondi
var gameOver;
var score;
var bestscore = 10000;
var level;
var laser; //array dei laser dell'eroe
var enLaser; //array dei laser dei nemici
var nem; //array di nemici
var h; //hero
/*
var ultSparo; //tempo dell'ultimo sparo
var attSparo; //tempo dello sparo attuale 
*/


//disegnare score e vita
function drawInterface() {
   var sc = new Image(); sc.src = "images/score.png";
   //score
   ctx.drawImage(sc, 20, canvas.height - 35);
   ctx.font = "30px Impact";
   ctx.fillStyle = "#FFFFFF";
   ctx.fillText(score, 150, canvas.height - 13);
   //linea di demarcazione
   ctx.beginPath();
   ctx.strokeStyle = "#FFFFFF";
   ctx.moveTo(0, canvas.height - 50);
   ctx.lineTo(canvas.width, canvas.height - 50);
   ctx.stroke();
}

function over() {
   var bestsc = new Image(); bestsc.src = "images/bestscore.png";
   //var ov = new Image(); ov.src = "images/gameover.png";
   var sc = new Image(); sc.src = "images/scoreFin.png";
   var ne = new Image(); ne.src = "images/nuova.png";
   if (bestscore < score && score != "game over") {
      bestscore = score;
      localStorage.setItem("best", bestscore);
   }
   //ctx.drawImage(ov, canvas.width / 2 - ov.width / 2, canvas.height / 2 - 200);
   ctx.drawImage(sc, canvas.width / 2 - bestsc.width / 2, canvas.height / 2 - 150);
   ctx.drawImage(bestsc, canvas.width / 2 - bestsc.width / 2, canvas.height / 2 + -50);
   ctx.drawImage(ne, canvas.width / 2 - ne.width / 2, canvas.height / 2 + 250);
   ctx.font = "70px Impact";
   ctx.fillStyle = "#FFFFFF";
   ctx.fillText(score, canvas.width / 2 + 40, canvas.height / 2 - 100);
   ctx.font = "70px Impact";
   ctx.fillStyle = "#FFFFFF";
   ctx.fillText(bestscore, canvas.width / 2 + 300, canvas.height / 2);
}

function newGame() {
   var ini = new Image(); ini.src = "images/inizio.png";
   ctx.drawImage(ini, canvas.width / 2 - ini.width / 2, canvas.height / 2 - ini.height / 2);
   score = 0;
   gameOver = false;
   var best = localStorage.getItem("best");
   if (best == null) bestscore = 0;
   else bestscore = parseInt(best);
   h = new Hero();
   laser = [];
   enLaser = [];
   nem = [];
   ultSparo = 0;
   level = 1;
   createEnemy();
}

function Hero() { //classe hero
   this.img = new Image();
   this.img.src = "images/hero.png"; //astronave
   this.x = 0;
   this.y = (canvas.height / 2 - img.height / 2) + 10;
   this.speed = 7;
   this.alive = true;

   this.draw = function () {
      if (this.alive) ctx.drawImage(this.img, this.x, this.y);
   }

   this.update = function () {
      if (rightPressed && this.x < canvas.width - this.img.width) this.x += this.speed; //destra
      if (leftPressed && this.x > 0) this.x -= this.speed; //sinistra
      if (upPressed && this.y > 0) this.y -= this.speed; //sopra
      if (downPressed && this.y < canvas.height - this.img.height - 52) this.y += this.speed; //sotto
      this.draw();
   }

   this.getX = function () {
      return this.x;
   }

   this.getY = function () {
      return this.y;
   }

   this.vinto = function () {
      if(this.x + this.img.width > canvas.width - 10) gameOver = true;

   }

   this.colpito = function (xPro, yPro) {
      if (this.x <= xPro && (this.x + this.img.width) >= xPro && this.y <= yPro && (this.y + this.img.height) >= yPro) {
         this.alive = false;
         gameOver = true;
         score = "game over";
         document.getElementById('fuoco').play();
      }
   }
}

function Laser(x, y, width, height, speed, w) { //w se 0 allora ha sparato il nostra navicella, se 1 allora i nemici
   this.x = x;
   this.y = y;
   this.w = w;
   this.width = width;
   this.height = height;
   this.speed = speed;
   this.state = true; //se true vuol dire che è ancora dentro lo spazio di gioco,se false non ci interessa più 

   this.draw = function () {
      ctx.beginPath();
      ctx.rect(this.x, this.y, this.width, this.height);
      if (this.w == 0) ctx.fillStyle = "#32CD32";
      else ctx.fillStyle = "#FA8072";
      ctx.fill();
      ctx.closePath();
   }
   this.update = function () {
      this.draw();
      if (this.w == 0) this.x += this.speed;
      else this.x -= this.speed;
   }
   this.getX = function () {
      return this.x;
   }
   this.getY = function () {
      return this.y;
   }
   this.getH = function () {
      return this.height;
   }
   this.getW = function () {
      return this.w;
   }

   this.getStato = function () {
      if (this.x >= canvas.width && this.w == 0) this.state = false;
      if (this.x <= 0 && this.w == 1) this.state = false;
      return this.state;
   }
}

function Nemico(x, y, img, speed) {
   this.iniY = y;
   this.x = x;
   this.y = y;
   this.speed = speed;
   this.img = img;
   this.mossa = 0;
   this.alive = true;
   this.draw = function () {
      if (this.alive) ctx.drawImage(this.img, this.x, this.y);
   }

   this.update = function () {
      if (this.y < this.iniY) {
         this.speed = -this.speed;
         if (level == 1) this.x -= 10;
         if (level == 2) this.x -= 20;
         if (level == 3) this.x -= 30;
      }
      if (this.y > this.iniY + 100) {
         this.speed = - this.speed;
         if (level == 1) this.x -= 10;
         if (level == 2) this.x -= 20;
         if (level == 3) this.x -= 30;
      }

      this.y += this.speed;

      this.draw();
   }

   this.getX = function () {
      return this.x;
   }

   this.getY = function () {
      return this.y;
   }

   this.getH = function () {
      return this.img.height;
   }

   this.getW = function () {
      return this.img.width;
   }

}

function createEnemy() {
   var img1 = new Image(); img1.src = "images/avversario3.png";
   var img2 = new Image(); img2.src = "images/avversario2.png";
   var img3 = new Image(); img3.src = "images/avversario1.png";
   var x1 = canvas.width - 90;
   var x2 = canvas.width - 180;
   var x3 = canvas.width - 270;
   var sepY = 10;

   for (var i = 0; i < 15; i++) {
      if (i == 5 || i == 10) sepY = 10;
      if (i >= 0 && i < 5) {
         nem.push(new Nemico(x1, sepY, img1, 1));
         sepY += 100;
      }
      if (i >= 5 && i < 10) {
         nem.push(new Nemico(x2, sepY, img2, 1));
         sepY += 100;
      }
      if (i >= 10 && i < 15) {
         nem.push(new Nemico(x3, sepY, img3, 1));
         sepY += 100;
      }
   }

}

function gioco() {
   if (!startGame && !gameOver) newGame(); //nuova partita
   else if (gameOver && startGame) over(); //gameover
   else {
      score++;
      if (!gameOver && startGame) { //gioco effettivo
         drawInterface();
         //muovo l'astronave
         h.update();


         //rimuovo i proiettili che non ci occorrono e aggiorno gli altri
         for (var i = 0; i < laser.length; i++)
            if (!laser[i].getStato()) laser.splice(i, 1);

         //rimuovo i proiettili che non ci occorrono e aggiorno gli altri
         for (var i = 0; i < enLaser.length; i++)
            if (!enLaser[i].getStato()) enLaser.splice(i, 1);


         //muovo il proiettile
         for (var i = 0; i < laser.length; i++)
            laser[i].update();

         //muovo gli avversari e forse spara
         for (var i = 0; i < nem.length; i++) {
            nem[i].update();
            var num = Math.floor(Math.random() * 300);
            if (Math.floor(Math.random() * 300) == 9)
               enLaser.push(new Laser(nem[i].getX() + 10, nem[i].getY() + 22, 12, 3, 10, 1));

         }

         for (var i = 0; i < enLaser.length; i++)
            enLaser[i].update();

         //hero complito
         for (var j = 0; j < enLaser.length; j++) {
            var x = enLaser[j].getX();
            var y = enLaser[j].getY() + (enLaser[j].getH() / 2);
            h.colpito(x, y);
         }

         for(var k = 0; k < nem.length; k++){
            var x = nem[k].getX();
            var y = nem[k].getY() + (nem[k].getH() / 2);
            h.colpito(x, y);
         }
         //hero win
         h.vinto();

      }
   }

}