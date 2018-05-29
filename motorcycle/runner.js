let Houses = [[75,1],[125,0],[200,1],[275,0],[400,1],[525,0],[650,1],[800,0]]
let x = 0
let cooldown = 0;
let it = 1;
function remove(array, element) {
    const index = array.indexOf(element);

    if (index !== -1) {
        array.splice(index, 1);
    }
}
function fauna(){
    ctx.beginPath();

    // Boring Side walk
    ctx.moveTo(650, 0);
    ctx.lineTo(150, 800);
    ctx.moveTo(630, 0);
    ctx.lineTo(0, 800);
    ctx.moveTo(750, 0);
    ctx.lineTo(1250, 800);
    ctx.moveTo(770, 0);
    ctx.lineTo(1400, 800);
    ctx.stroke();
    ctx.closePath();
}
function buildings(){
    ctx.drawImage(LEFTBUILDINGS, 0, 0);
    ctx.drawImage(RIGHTBUILDINGS, 600, 0);
}
function updateR(y) {
    ctx.beginPath();
    ctx.fillStyle = "#0095DD";
    x = ((y-906.195)*565)/-800
    ctx.rect(x-y/11, y, y/9, y/9);


    ctx.fill();
}
function updateL(y) {
    ctx.beginPath();
    x = ((y+1076.106)*565)/800
    ctx.rect(x-y/110, y, y/9, y/9);
    ctx.fill();
}

function draw() {
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    buildings();
    Houses.push([0,1])
    for (let i = 0; i < Houses.length; i++){
        Houses[i][0] += (Houses[i][0]/20)+i;
        if (Houses[i][1] == 0){
            updateR(Houses[i][0]);
        }else{
            updateL(Houses[i][0]);
        }
        if (Houses[i][0] >= 800){
            remove(Houses,i);
        }
    }
    fauna();
    console.log(Houses.length)
    requestAnimationFrame(draw);
}
draw();
