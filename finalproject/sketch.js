let song;

function preload() {
    song = loadSound("machine.wav")
}

function setup() {
    createCanvas(400, 400);
    song.play();
}

function draw() {
    background(220);
}