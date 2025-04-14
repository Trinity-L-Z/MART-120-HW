var x = 200;
var y = 200;

var mouseShapeX;
var mouseShapeY;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background (120);
    //this impacts the color (red, green, blue)
    fill(10, 145, 200);
    //to create the border
    createBorders(10);
    //the exit text
    textSize(20);
    text("exit here", width-100, height-50)

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

    //to create shape with mouse
    fill(100, 0, 25);
    ellipse(mouseShapeX, mouseShapeY, 25, 25);

    //my two obstacles
    fill(25,150,100);
    square(400,200,75);

    fill(30,70,10);
    square(100,500,100);

}

function createBorders(thickness) {
    rect(0,0,width,thickness);
    rect(0,0,thickness,height);
    rect(0,height-thickness,width,thickness);
    rect(width-thickness,0,thickness,height-50);
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}