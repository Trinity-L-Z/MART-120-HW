var x = 200;
var y = 200;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background (120);
    //this impacts the color (red, green, blue)
    fill(10, 145, 200);
    if(keyIsDown(68));
    {
        x+=5;
    }
    if(keyIsDown(65));
    {
        x-=5;
    }
    ellipse (x,y,50,50);
    
    if (x >= 600) {
        x = 0;
    }
}