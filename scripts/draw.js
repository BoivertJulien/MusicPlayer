// Clears the canvas content
function clearCanvas() {
   //ctx.clearRect(0, 0, canvas.width, canvas.height);
      // create a vertical gradient of the height of the canvas
    gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'rgba(0,0,0,0.4)');
    gradient.addColorStop(0.40, 'rgba(0,0,255,0.4)');
    gradient.addColorStop(0.49, 'rgba(173,216,230,0.4)');
    gradient.addColorStop(0.51, 'rgba(255,192,203,0.4)');
    gradient.addColorStop(0.8, 'rgba(255,0,255,0.4)');

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
