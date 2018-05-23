function drawPaddle() {
    ctx.beginPath();
    ctx.rect(0, mycanvas.height-5, 50, 50);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function draw() {
    drawPaddle()
}
draw();
