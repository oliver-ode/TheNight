/**  Variables  **/
var mycanvas = document.getElementById('mycanvas');
var ctx = mycanvas.getContext('2d');
var w = 1200;
var h = 900;

/**  Constants  **/
BLACK = (0,0,0)
WHITE = (255,255,255)
BLUE = (0,127,255)
var RIGHT = document.createElement("img");
RIGHT.src = "images/Right.png";
var LEFT = document.createElement("img");
LEFT.src = "images/Left.png";
var UP = document.createElement("img");
UP.src = "images/Up.png";
var TREE = document.createElement("img");
TREE.src = "images/Tree.png";
var ROCK = document.createElement("img");
ROCK.src = "images/Rock.png";

/**  Classes  **/
class Skier {
    constructor(){
        image = UP;
        curr = 1;
    }
}

class Tree {
    constructor(){
        image = TREE;
    }
    reset_pos() {
        image = TREE;
        image.x = -200;
        image.y = 0;
    }
    update_R() {
        image = TREE
        scale = image.y+image.width * 1.5
        image.width = parseInt(image.width+scale)
        image.height = parseInt(image.height+scale)
        image.y += 2.5 + scale/20;
        image.x = (900+image.y)/1.5

        if (self.rect.y > 450){
            this.reset_pos()
        }
    }
}