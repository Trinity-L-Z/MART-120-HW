//for my movable character
var x = 200;
var y = 200;

//for the moving shape
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

//for the shapes that appear by clicking the mouse
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

    if (keyIsDown(LEFT_ARROW) === true) {
        x-= 5;
   } 
   else if (keyIsDown(RIGHT_ARROW) === true) {
       x += 5;
   }
   else if (keyIsDown(UP_ARROW) === true) {
       y -= 5;
   }
   else if (keyIsDown(DOWN_ARROW) === true) {
       y += 5;
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
    square(400,200,55);

    fill(130,100,170);
    square(100,450,100);

    //winner message
    if(x > width && y > width) {
        textSize(30);
        text("You're a winner!", width-300, height-200);
    }
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