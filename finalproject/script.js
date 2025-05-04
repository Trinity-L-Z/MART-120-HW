var song
var fft


function preload() {
    song = loadSound('machine.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    button = createButton("play");
    button.mousePressed(togglePlaying);
    fft = new p5.FFT()
}

function draw() {
    background (0)
    stroke(255) //wave color

    var wave = fft.waveform()

    for (var i = 0; i < width; i++) {
        var index = floor(map(i, 0, width, 0, wave.length))

        var x = i
        var y = wave(index) * 300 + height / 2
        point(x, y)
    }
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