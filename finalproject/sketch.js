let song;
let fft; smoothing = 0.8; let bins = 512;
let waveform = [];

function preload() {
    song = loadSound("machine.mp3")
}

function setup() {
    createCanvas(400, 400);
    song.play();
    fft = new p5.FFT(smoothing, bins);
}

function draw() {
    background(220);
    waveform = fft.waveform();
    print(waveform);
}