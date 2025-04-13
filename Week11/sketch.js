var x = 200;
var y = 200;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background (120);
    fill(10, 145, 200);
    ellipse (x,y,50,50);
    
    if (x >= 600) {
        x = 0;
    }
}