let Houses = [[]]
let Car = [[]]
let x = 0
let it = 1;
let curr_count = 0;
let COUNTDOWN = 30;
let playerx = 1;

function fauna(){
    ctx.beginPath();
    ctx.fillStyle = "#0095DD";
    // Boring Side walk
    ctx.moveTo(650, 0);
    ctx.lineTo(150, 800);
    ctx.moveTo(630, 0);
    ctx.lineTo(0, 800);
    ctx.moveTo(750, 0);
    ctx.lineTo(1250, 800);
    ctx.moveTo(770, 0);
    ctx.lineTo(1400, 800);
    // Lane lines BOIII (replace with png *cough* *cough* olie)
    ctx.moveTo(683, 0);
    ctx.lineTo(517, 800);
    ctx.moveTo(716,0)
    ctx.lineTo(883, 800);
    ctx.stroke();

    
    // Points 650, 683, 716, 750
    // Points 150, 517, 883, 1250
}
function buildings(){
    ctx.drawImage(LEFTBUILDINGS, 0, 0);
    ctx.drawImage(RIGHTBUILDINGS, 600, 0);
}

function updatecar(car){
    if (car[0] == 0){
        x = (car[1]-1602.4)*(-333)/800;
        ctx.rect(x-car[1]/12,car[1],car[1]/6,car[1]/6)
        ctx.fill();
    } else if (car[0] == 1){
        x = 700;
        ctx.rect(x-car[1]/8,car[1],car[1]/4,car[1]/4)
        ctx.fill();
    } else{
        x = (car[1] + 1755) * 334/800;
        ctx.rect(x-car[1]/12,car[1],car[1]/6,car[1]/6)
        ctx.fill();
    }
}

function updatepeople(person){
    y = person[0];
    if (person[1] == 0){
        ctx.beginPath();
        x = ((y-906.195)*565)/-800
        ctx.rect(x-y/11, y, y/9, y/9);
        ctx.fill();
    }else{
        ctx.beginPath();
        x = ((y+1076.106)*565)/800
        ctx.rect(x-y/110, y, y/9, y/9);
        ctx.fill();
    }
}

function Player(){
    if (playerx == 0){
        ctx.beginPath();
        ctx.rect(350-184/2, 800-184/2, 184, 184);
        ctx.fill();
    }else if (playerx == 1){
        ctx.beginPath();
        ctx.rect(701-184/2, 800-184/2, 184, 184);
        ctx.fill();
    }else{
        ctx.beginPath();
        ctx.rect(1051-184/2, 800-184/2, 184, 184);
        ctx.fill();
    }

}
function add_people(){
    if (curr_count == 0) {
        if (Math.random()*100 > 95){
            Houses.push([0, Math.round(Math.random() * 2)]);
            Car.push([Math.round(Math.random()*3), 1]);
            curr_count = COUNTDOWN;
        }
    }else{
        curr_count--;
    }
}

function draw() {
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    buildings();
    add_people();
    for (let i = 0; i < Houses.length; i++){
        Houses[i][0] += (Houses[i][0]/20)+i;
        updatepeople(Houses[i]);
        if (Houses[i][0] >= 800){
            Houses.splice(Houses[i],1);
            i--;
        }
    }

    Player();
    fauna();
    for (let i = 0; i < Car.length; i++){
        Car[i][1] += (Car[i][1]/20)+i;
        updatecar(Car[i]);

        if (Car[i][1] >= 800){
            Car.splice(Car[i],1);
            i--;
        }
    }
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 37) {
            if (playerx != 0) playerx--;
        }
        if (evt.keyCode == 39){
            if (playerx != 2) playerx++;
        }
    };
    ctx.closePath();
    requestAnimationFrame(draw);
}
draw();
