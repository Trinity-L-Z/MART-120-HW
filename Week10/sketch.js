var x1 = 300
var x2 = 400
var y = 100
var diameter = 50

var movement;

function setup() {
    createCanvas(600, 600);
    movement = floor(random() * 10) + 1;
}

function draw() {
    background(220);
    text('"The book I just finished reading", by Trinity Zachariasen', 300, 570);
    circle(x1, y, diameter);
    if(x1 >= 300 || x1 <=0)
    {
        movement *=-1;
    }
    x1 += movement;

    circle(x2, 100, 50);

    triangle(360, 200, 360, 150, 275, 200);
    line(260, 275, 400, 275);
    line(400, 275, 425, 260);
    line(260, 70, 270, 60);
    line(270, 60, 330, 60);
    line(360, 60, 420, 60);
    line(420, 60, 440, 70);
    ellipse(340, 330, 70, 50);
    triangle(440, 175, 440, 150, 480, 150);
    triangle(260, 175, 260, 150, 240, 150);
    point(300, 100);
    point(400, 100);
    rect(75, 100, 150, 200);
    text('Small Worlds', 120, 140);
    text('by Caleb Azumah Nelson',85, 200);
}