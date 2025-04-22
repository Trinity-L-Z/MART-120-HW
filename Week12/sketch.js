//for my movable character
var x = 200;
var y = 200;

//for the moving shape
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

//for the shapes that appears by clicking the mouse
var mouseShapeX;
var mouseShapeY;

function setup() {
    createCanvas(600, 600);
}

//function for moving my character
function movecharacter() {
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
}

//function for creating my character
function createcharacter(x,y) {
    characterX = x;
    characterY = y;
    console.log(characterX);
    ellipse (x,y,50,50);
    
    if (x >= 600) {
        x = 0;
    }
}

//function for drawing object with mouse
function placeshapewithmouse() {
    fill(100, 0, 25);
    ellipse(mouseShapeX, mouseShapeY, 25, 25);
}

//function for making the exit
function exithere() {
    textSize(20);
    text("exit here", width-100, height-50);
}

//making background shape more
function movingball() {
 // the moving shape
    fill(0, 300, 400);
    circle(shapeX, shapeY, 15);
    
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // for making it move
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    // making the shape return
    if(shapeX > width) {
        shapeX = 0;
    }
    if(shapeX < 0) {
        shapeX = width;
    }
    if(shapeY > height) {
        shapeY = 0;
    }
    if(shapeY < 0) {
        shapeY = height;
    }
}

//where all of the functions are finally called and actually made to happen, also where the canvas is drawn
function draw() {
    background (120);
    //this impacts the color (red, green, blue)
    fill(10, 145, 200);
    //to create the border
    createBorders(10);
    //character keyboard movement function being called
    movecharacter();
    //calling the function for you win message
    youwin();
    //calling function to create shape with mouse
    placeshapewithmouse();
    //exit here function being called
    exithere();
    placeobjects();
    movingball();
    createcharacter(x,y);
   
}

//function for the two objects
function placeobjects() {
    fill(25,150,100);
    square(400,200,55);

    fill(130,100,170);
    square(100,450,100);
}

//function for making the borders
function createBorders(thickness) {
    rect(0,0,width,thickness);
    rect(0,0,thickness,height);
    rect(0,height-thickness,width,thickness);
    rect(width-thickness,0,thickness,height-50);
}

function youwin() {
    if(x > width && y > width-50) {
        fill(0);
        textSize(26);
        text("You Win!", width-300, height-200);
    }
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}