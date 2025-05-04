var song
var fft
var particles = []


function preload() {
    song = loadSound('machine.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES)

    button = createButton("play");
    button.mousePressed(togglePlaying);

    fft = new p5.FFT()
}

function draw() {
    background (0)
    stroke(255) //wave color
    noFill()

    translate(width / 2, height / 2)

    var wave = fft.waveform()

    for (var t = -1; t <= 1; t += 2) {
        beginShape()
        for (var i = 0; i < 180; i += 0.5) {
            var index = floor(map(i, 0, 180, 0, wave.length))

            var r = map(wave[index], -1, 1, 150, 350)

            var x = r * sin(i) * t
            var y = r * cos(i)
            vertex(x, y)
        }
        endShape()
        }
    var p = new Particle()
    particles.push(p)

    for (var i = 0; i < particles.length; i++) {
        particles[i].show()
    }

}

function togglePlaying() {
    if (!song.isPlaying()) {
        song.play();
        button.html("pause");
        loop();
    } else {
        song.pause();
        button.html("play");
        noLoop();
    }
}

class Particle {
    constructor() {
        this.pos = p5.Vector.random2D().mult(250)
    }
    show() {
        noStroke()
        fill(255)
        ellipse(this.pos.x, this.pos.y, 4)
    }
}