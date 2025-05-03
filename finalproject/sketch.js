let song;
let fft; smoothing = 0.8; let bins = 512;
let waveform = []; let r = 100

//this is to make the audio play in the browser
const audio = new Audio("machine.mp3");
audio.addEventListener('canplaythrough', function() {
    audio.play();
});
audio.addEventListener('error', function() {
    console.error('Error loading audio:', audio.error);
});

//this function is for the song
function preload() {
    song = loadSound("machine.mp3")
}

function setup() {
    createCanvas(bins, bins);
    song.play();
    fft = new p5.FFT(smoothing, bins);
}

function draw() {
    background(220);
    waveform = fft.waveform();
    print(waveform);

    //for loop
    for (let i=0; i<waveform.length; i++) {
        let y = height/2 + map(waveform[i], -1, 1, -r, r);
        ellipse(i, y, 1, 1);
    }
}