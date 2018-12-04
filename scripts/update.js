function isOutOfScreen(pos){ //approximation pour missiles
  return (pos.x > canvas.width || pos.x < 0 || pos.y > canvas.height || pos.y < 0);
}
