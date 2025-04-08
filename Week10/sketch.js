var x1 = 300
//variable for left eye
var x2 = 400
//variable for right eye
var y = 100
//variable for both eyes
var diameter = 50
//variable for both eyes
var y1 = 330
//variable for chin
var y2 = 100
//variable for book
var y3 = 140
//variable for small worlds txt
var y4 = 200
//variable for author txt

var movement;

function setup() {
    createCanvas(600, 600);
    movement = floor(random() * 10) + 1;
}

function draw() {
    background(220);
    textSize(10);
    text('"The book I just finished reading", by Trinity Zachariasen', 300, 570);
    circle(x1, y, diameter);
    //this is the left eyeball
    if(x1 >= 300 || x1 <=0)
    {
        movement *=-1;
    }
    x1 += movement;

    circle(x2, 100, 50);
    //this is the right eyeball
    if(x2 >= 400 || x2<=0)
    {
        movement *=1;
    }
    x2 +=movement;

    triangle(360, 200, 360, 150, 275, 200);
    line(260, 275, 400, 275);
    line(400, 275, 425, 260);
    line(260, 70, 270, 60);
    line(270, 60, 330, 60);
    line(360, 60, 420, 60);
    line(420, 60, 440, 70);
    ellipse(340, y1, 70, 50);
    //this is the chin
    if(y1 >= 330 || y1 <=0)
    {
        movement *=1;
    }
    y1 +=movement;

    triangle(440, 175, 440, 150, 480, 150);
    triangle(260, 175, 260, 150, 240, 150);
    point(300, 100);
    point(400, 100);
    rect(75, y2, 150, 200);
    //this is the book
    if(y2 >= 100 || y1 <=600)
    {
        movement *=1;
    }
    y2 -=movement;
    
    text('Small Worlds', 120, y3);
    if(y3 >= 140 || y3 <= 600)
    {
        movement *=1;
    }
    y3 -=movement;

    text('by Caleb Azumah Nelson',85, y4);
    if(y4 >=200 || y4 <= 600)
    {
        movement *=1;
    }
    y4 -=movement;
}