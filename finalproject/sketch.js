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
    strokeWeight(3)
    noFill()

    translate(width / 2, height / 2)

    fft.analyze()
    amp = fft.getEnergy(20, 200) //make particles respond to a frequency range

    var wave = fft.waveform()

    for (var t = -1; t <= 1; t += 2) {
        beginShape()
        for (var i = 0; i < 180; i += 0.5) {
            var index = floor(map(i, 0, 180, 0, wave.length - 1))

            var r = map(wave[index], -1, 1, 150, 350)

            var x = r * sin(i) * t
            var y = r * cos(i)
            vertex(x, y)
        }
        endShape()
        }
    var p = new Particle()
    particles.push(p)

    for (var i = particles.length - 1; i >= 0; i--) {
        if (!particles[i].edges()) {
        particles[i].update(amp > 230) //frequency
        particles[i].show()
        } else {
            particles.splice(i, 1)
        }
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
        this.vel = createVector(0, 0) //to make particles move
        this.acc = this.pos.copy().mult(random(0.0001, 0.00001)) //to make them accelerate

        this.w = random(3, 5)

        this.color = [random(200, 255), random(200, 255), random(200, 255)] //random colors
    }
    update(cond) {
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        if (cond) {
            this.pos.add(this.vel)
            this.pos.add(this.vel)
            this.pos.add(this.vel)
        }
    }
    edges() { //to make particles go away after leaving canvas
        if (this.pos.x <-width / 2 ||this.pos.x > width / 2 || this.pos.y < -height || this.pos.y > height) {
                return true
            } else {
                return false
            }
    }
    show() {
        noStroke()
        fill(this.color)
        ellipse(this.pos.x, this.pos.y, this.w)
    }
}