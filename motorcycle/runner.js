let People = [[]]
let Car = [[]]
let x = 0
let it = 1;
let curr_count = 0;
let COUNTDOWN = 30;
let playerx = 1;
let score = 0;
var start = true;
var CAR = document.createElement("img");
CAR.src = "images/car.png";
var PEDESTRIAN = document.createElement("img");
PEDESTRIAN.src = "images/pedestrian.png";
var BACKGROUND = document.createElement("img");
BACKGROUND.src = "images/background.jpg";

function easySettings(){
    document.getElementById("ezybtn").disabled = true;
    document.getElementById("hrdbtn").disabled = true;
    COUNTDOWN = 30;
    start = false;
    //Put the stuff for an easy mode
    //I don't know what the vars exactly do
    //so if you could just make an easy mode
    //that would be great Robbie
}
function hardSettings(){
    document.getElementById("hrdbtn").disabled = true;
    document.getElementById("ezybtn").disabled = true;
    COUNTDOWN = 15;
    start = false;
    //Put the stuff for an hard mode
    //I don't know what the vars exactly do
    //so if you could just make an hard mode
    //that would be great Robbie
}

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

function restart(){
    People = [[]];
    Car = [[]];
    score = 0;
}
function updatePeople(person) {
    y = person[0];
    if (person[1] == 0){
        ctx.beginPath();
        x = ((y-906.195)*565)/-800
        ctx.drawImage(PEDESTRIAN, x-y/11, y, y/9, y/9);
    }else{
        ctx.beginPath();
        x = ((y+1076.106)*565)/800
        ctx.drawImage(PEDESTRIAN, x-y/110, y, y/9, y/9);
    }
}
function updateCar(car){
    if (car[0] <= 1){
        if (car[1]/1.1 > 600 && playerx == 0){
            restart();

        }
        x = (car[1]-1602.4)*(-333)/800;
        ctx.drawImage(CAR, x-car[1]/1.3,car[1]/1.1,car[1],car[1])
    } else if (car[0] <= 2){
        if (car[1] > 650 && playerx == 1){
            restart();

        }
        x = 700;
        ctx.drawImage(CAR, x-car[1]/2,car[1],car[1],car[1])
    } else{
        if (car[1] > 600 && playerx == 2){
            restart();

        }
        x = (car[1] + 1755) * 334/800;
        ctx.drawImage(CAR, x-car[1]/4,car[1]/1.1,car[1],car[1])
    }
}
function player(){
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
function incrimentScore(){
    score++;
    ctx.fillStyle = "#33FFF0";
    ctx.font="50px Arial";
    ctx.fillText("Score: " + score/10, 50, 70)
}
function addPeople(){
    if (curr_count == 0) {
        if (Math.random()*100 > 50){
            Car.push([Math.random()*3, 1]);
            curr_count = COUNTDOWN;
        }
    }else{
        if (Math.random()*100 > 95) {
            People.push([0, Math.round(Math.random() * 2)]);
            curr_count = COUNTDOWN;
        }
        curr_count--;
    }
}
function startScreen(){
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    ctx.drawImage(BACKGROUND, 0, 0, 1400, 800)
    let line1 = "The Night";
    let line2 = "A 2.5D Runner Game";
    ctx.fillStyle = "#FF5733";
    ctx.font="100px Arial";
    ctx.fillText(line1, 500, 300)
    ctx.font="65px Arial";
    ctx.fillText(line2, 370, 500)
}

function draw() {
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    if(start == false){
        buildings();
        addPeople();
        for (let i = 0; i < People.length; i++){
            People[i][0] += (People[i][0]/20)+5;
            updatePeople(People[i]);
            if (People[i][0] >= 800){
                People.splice(People[i],1);
                i--;
            }
        }

        player();
        fauna();
        for (let i = 0; i < Car.length; i++){
            Car[i][1] += (Car[i][1]/30)+2;
            updateCar(Car[i]);
            console.log(Car.length);

            if (i >= Car.length){
                break;
            }
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
        incrimentScore();
        ctx.closePath();
        requestAnimationFrame(draw);
    }
    else{
        startScreen();
        requestAnimationFrame(draw);
    }
}
draw();