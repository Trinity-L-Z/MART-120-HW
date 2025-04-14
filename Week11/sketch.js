var x = 200;
var y = 200;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background (120);
    //for the border
    createBorders(15);
    //exit gap
    textSize(20);
    text("exit here", width-50,height-50);
    //this impacts the color (red, green, blue)
    fill(10, 145, 200);
    if(keyIsDown(RIGHT_ARROW) === true)
    {
        x+=5;
    }
    if(keyIsDown(LEFT_ARROW) === true)
    {
        x-=5;
    }
    if(keyIsDown(DOWN_ARROW) === true)
    {
        y+=5;
    }
    if(keyIsDown(UP_ARROW) === true)
    {
        y-=5;
    }
    ellipse (x,y,50,50);
    
    if (x >= 600) {
        x = 0;
    }
}

