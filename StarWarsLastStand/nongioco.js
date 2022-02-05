//tutto cio' che non riguarda il gioco ma il menu e le descrizioni

//immagini che per il menu e le singole voci
var img = new Image();
img.src = "images/titolo.png";
var img1 = new Image();
img1.src = "images/partita.png";
var img2 = new Image();
img2.src = "images/controlli.png";
var img3 = new Image();
img3.src = "images/crediti.png";
var img4 = new Image();
img4.src = "images/cont.png";
var img5 = new Image();
img5.src = "images/esc.png";
var img6 = new Image();
img6.src = "images/newcontrolli.png";
var img7 = new Image();
img7.src = "images/newcrediti.png";
var img8 = new Image();
img8.src = "images/cred.png";
var img9 = new Image();
img9.src = "images/creatore.png";
var img10 = new Image();
img10.src = "images/cred2.png";
var img11 = new Image();
img11.src = "images/fine.png";

//menu = 0
function menu() {
    ctx.drawImage(img, canvas.width / 2 - img.width / 2, 30);
    ctx.drawImage(img1, canvas.width / 2 - img1.width / 2, 300);
    ctx.drawImage(img2, canvas.width / 2 - img2.width / 2, 420);
    ctx.drawImage(img3, canvas.width / 2 - img3.width / 2, 540);
    //controllo se seleziono e clicco una voce
    //startgame 
    if (xMouse >= canvas.width / 2 - img1.width / 2 && xMouse <= canvas.width / 2 - img1.width / 2 + img1.width
        && yMouse >= 300 && yMouse <= 300 + img1.height && !clickPressed) {
        var newimg = new Image();
        newimg.src = "images/partitaSel.png";
        ctx.drawImage(newimg, canvas.width / 2 - img1.width / 2, 300);
    }
    if (xMouse >= canvas.width / 2 - img1.width / 2 && xMouse <= canvas.width / 2 - img1.width / 2 + img1.width
        && yMouse >= 300 && yMouse <= 300 + img1.height && clickPressed) {
        if (!soundPressed) document.getElementById('sottovoci').play(); //suono scelta
        var newimg = new Image();
        newimg.src = "images/partitaSel.png";
        ctx.drawImage(newimg, canvas.width / 2 - img1.width / 2, 300);
        menuScelta = 1;
    }

    //controlli
    if (xMouse >= canvas.width / 2 - img2.width / 2 && xMouse <= canvas.width / 2 - img2.width / 2 + img2.width
        && yMouse >= 420 && yMouse <= 420 + img2.height && !clickPressed) {
        var newimg = new Image();
        newimg.src = "images/controlliSel.png";
        ctx.drawImage(newimg, canvas.width / 2 - img2.width / 2, 420);
    }
    if (xMouse >= canvas.width / 2 - img2.width / 2 && xMouse <= canvas.width / 2 - img2.width / 2 + img2.width
        && yMouse >= 420 && yMouse <= 420 + img2.height && clickPressed) {
        if (!soundPressed) document.getElementById('sottovoci').play(); //suono scelta
        var newimg = new Image();
        newimg.src = "images/controlliSel.png";
        ctx.drawImage(newimg, canvas.width / 2 - img2.width / 2, 420);
        menuScelta = 2;
    }

    //crediti
    if (xMouse >= canvas.width / 2 - img3.width / 2 && xMouse <= canvas.width / 2 - img3.width / 2 + img3.width
        && yMouse >= 540 && yMouse <= 540 + img3.height && !clickPressed) {
        var newimg = new Image();
        newimg.src = "images/creditiSel.png";
        ctx.drawImage(newimg, canvas.width / 2 - img3.width / 2, 540);
    }
    if (xMouse >= canvas.width / 2 - img3.width / 2 && xMouse <= canvas.width / 2 - img3.width / 2 + img3.width
        && yMouse >= 540 && yMouse <= 540 + img3.height && clickPressed) {
        if (!soundPressed) document.getElementById('sottovoci').play(); //suono scelta
        var newimg = new Image();
        newimg.src = "images/creditiSel.png";
        ctx.drawImage(newimg, canvas.width / 2 - img3.width / 2, 540);
        menuScelta = 3;
    }
}

//menu = 2
function controlli() {
    ctx.drawImage(img6, canvas.width / 2 - img6.width / 2, 30);
    ctx.drawImage(img4, canvas.width / 2 - img4.width / 2, 200);
    ctx.drawImage(img5, canvas.width - 375, canvas.height - 50);

    //torna al menu principale
    if (xMouse >= canvas.width - 375 && xMouse <= canvas.width - 375 + img5.width
        && yMouse >= canvas.height - 50 && yMouse <= canvas.height - 50 + img5.height && !clickPressed) {
        var newimg = new Image();
        newimg.src = "images/escSel.png";
        ctx.drawImage(newimg, canvas.width - 375, canvas.height - 50);
    }
    if (xMouse >= canvas.width - 375 && xMouse <= canvas.width - 375 + img5.width
        && yMouse >= canvas.height - 50 && yMouse <= canvas.height - 50 + img5.height && clickPressed) {
        var newimg = new Image();
        newimg.src = "images/escSel.png";
        ctx.drawImage(newimg, canvas.width - 375, canvas.height - 50);
        menuScelta = 0;
        if (!soundPressed) document.getElementById('sottovoci').play(); //suono scelta
    }

}

//menu = 3
function crediti() {
    ctx.drawImage(img7, canvas.width / 2 - img7.width / 2, 30);
    ctx.drawImage(img8, canvas.width / 2 - img8.width / 2, 120);
    ctx.drawImage(img10, canvas.width / 2 - img8.width / 2, 220);
    ctx.drawImage(img9, canvas.width / 2 - img8.width / 2, 320);
    ctx.drawImage(img11, canvas.width / 2 - img8.width / 2, 420);
    ctx.drawImage(img5, canvas.width - 375, canvas.height - 50);

    //torna al menu principale
    if (xMouse >= canvas.width - 375 && xMouse <= canvas.width - 375 + img5.width
        && yMouse >= canvas.height - 50 && yMouse <= canvas.height - 50 + img5.height && !clickPressed) {
        var newimg = new Image();
        newimg.src = "images/escSel.png";
        ctx.drawImage(newimg, canvas.width - 375, canvas.height - 50);
    }
    if (xMouse >= canvas.width - 375 && xMouse <= canvas.width - 375 + img5.width
        && yMouse >= canvas.height - 50 && yMouse <= canvas.height - 50 + img5.height && clickPressed) {
        var newimg = new Image();
        newimg.src = "images/escSel.png";
        ctx.drawImage(newimg, canvas.width - 375, canvas.height - 50);
        menuScelta = 0;
        if (!soundPressed) document.getElementById('sottovoci').play(); //suono scelta
    }

}