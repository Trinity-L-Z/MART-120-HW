var x = 200;
var y = 200;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background (120);
    //this impacts the color (red, green, blue)
    fill(10, 145, 200);
    if(keyIsDown(LEFT_ARROW) === true)
    {
        x+=5;
    }
    if(keyIsDown(RIGHT_ARROW) === true)
    {
        x-=5;
    }
    ellipse (x,y,50,50);
    
    if (x >= 600) {
        x = 0;
    }
}