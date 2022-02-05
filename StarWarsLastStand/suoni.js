//la gestione della musica del videogioco
function sound() {
   if (musicPressed) {
      document.getElementById('game').pause();
      document.getElementById('menu').pause();
   }
   if(menuScelta == 1 && !musicPressed){
      document.getElementById('game').play();
      document.getElementById('menu').pause();
   }
   if(menuScelta != 1 && !musicPressed){
      document.getElementById('menu').play();
      document.getElementById('game').pause();
   }
}
