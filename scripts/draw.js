// Clears the canvas content
function clearCanvas() {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
      // create a vertical gradient of the height of the canvas
    gradient = ctx.createLinearGradient(0, 0, 0, canvas.height/2);
    gradient.addColorStop(0, 'black');
    gradient.addColorStop(0.40, 'blue');
    gradient.addColorStop(0.48, 'lightblue');
    gradient.addColorStop(0.5, 'pink');
    gradient.addColorStop(1, 'magenta');

    ctx.save();

    // set the fill style to a nice gradient
    ctx.fillStyle = gradient;

    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(0,canvas.height);
    ctx.lineTo(canvas.width,canvas.height);
    ctx.lineTo(canvas.width,0);
    ctx.fill();

    ctx.restore();
}
