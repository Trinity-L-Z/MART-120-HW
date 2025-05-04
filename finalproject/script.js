var song


function preload() {
    song = loadSound('machine.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background (0)
}

function togglePlaying() {
    if (!song.isPlaying()) {
        song.play();
        button.html("pause");
    } else {
        song.pause();
        button.html("play");
    }
}