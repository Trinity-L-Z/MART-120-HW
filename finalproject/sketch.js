let song;
let fft; smoothing = 0.8; let bins = 512;
let waveform = [];

const audio = new Audio("machine.mp3");
audio.addEventListener('canplaythrough', function() {
    audio.play();
});
audio.addEventListener('error', function() {
    console.error('Error loading audio:', audio.error);
});

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