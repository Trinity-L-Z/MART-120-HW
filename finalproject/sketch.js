let song;
let fft; smoothing = 0.8; let bins = 512;
let waveform = []; let r = 100
let spectrum = [];

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
    spectrum = fft.analyze();
    let vol = fft.getEnergy(20, 140);
    
    for (let i=0; i<spectrum.length; i++) {
        let y = map(spectrum[i], 0, 255, 0, height);
        line(i, height, i, height - y); 
    }

    //for loop - time domain
    //for (let i=0; i<waveform.length; i++) {
      //  let y = height/2 + map(waveform[i], -1, 1, -r, r);
        //ellipse(i, y, 1, 1);
    //}
}