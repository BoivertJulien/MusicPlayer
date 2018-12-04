defineGameListeners = function(){
    window.addEventListener('resize', resizeCanvas, false);

    // If the key is released, change the states object
    window.addEventListener('keyup', function(event){
    if (event.keyCode === 32) {
        if (state == 0){
            state = 1; // FLAG: Arretera l'ancienne animation
            player.play();
            requestAnimationFrame(animation);
        } else {
            state = 0; // FLAG: Arretera l'ancienne animation
            player.pause();
            player.currentTime = 0;
            requestAnimationFrame(menu);
        }
    }
    }, false);
}

function getMousePos(evt) {
   // necessary to take into account CSS boudaries
   var rect = canvas.getBoundingClientRect();
   return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
   };
 }

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    etoiles=[];
}