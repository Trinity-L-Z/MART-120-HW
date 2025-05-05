var song, fft, fftLin;
var spectrumScale = 1;
var linNum = 40;
var c = 0;
var f = [];
var d = [];

var particles = [];

function preload() {
  song = loadSound("machine.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  
   button = createButton("play");
    button.mousePressed(togglePlaying);
  
  noStroke();
  fft = new p5.FFT();
  song.loop();
  fft.analyze();
  song.setVolume(1);
  fftLin = fft.linAverages(linNum);
  for (var i = 0; i< fftLin.length; i++){
    if(i == 0) {
      f[i] = 0;
      d[i] = 0;
    } else {
      f[i] = random(-width/2, width/2);
      d[i] = random(-height/2, height/2);
    }
  }
}

function draw() {
  fft.analyze();
  amp = fft.getEnergy(20, 200); //to make particles respond to frequency range
  fftLin = fft.linAverages(linNum);
  noStroke();
  fill(0, 0, 0, 20);
  rect(0, 0, width, height);
  translate(width/2, height/2);
  
  push();
  rotate(radians(c));
  for(var i = 0; i < fftLin.length; i++){
    strokeWeight(3);
    if(i % 2 == 1) {
      stroke(255); //white circles
    } else {
      stroke(255, 0, 100); //circle outside color
    }
    if(i == 0) { //big center circle
      ellipse(f[i], d[i], fftLin[i]*spectrumScale*2, fftLin[i]*spectrumScale*2);
    } else {
      ellipse(f[i], d[i], fftLin[i]*spectrumScale, fftLin[i]*spectrumScale);
    }
  }
  c += 5;
  pop();
  
  var wave = fft.waveform();
  
  for (var t = -1; t <= 1; t +=2) {
    beginShape();//green circle
        for (var j = 0; j < 180; j += 0.5) {
            var index = floor(map(j, 0, 180, 0, wave.length - 1))

            var r = map(wave[index], -1, 1, 150, 350)

          var x = r * sin(j) * t
            var y = r * cos(j)
            vertex(x, y)
        }
        stroke(0, 300, 70);
        endShape();
    
    beginShape(); //pink circle
        for (var j = 0; j < 180; j += 0.5) {
            var index = floor(map(j, 0, 180, 0, wave.length - 1))

            var r = map(wave[index], -1, 1, 200, 350)

            var x = r * sin(j) * t
            var y = r * cos(j)
            vertex(x, y)
        }
        stroke(255, 0, 100);
        endShape();

        beginShape(); //purplish blue circle
        for (var j = 0; j < 180; j += 0.5) {
            var index = floor(map(j, 0, 180, 0, wave.length - 1))

            var r = map(wave[index], -1, 1, 15, 350)

            var x = r * sin(j) * t
            var y = r * cos(j)
            vertex(x, y)
        }
        stroke(100, 50, 400);
        endShape();

        beginShape(); //yellow circle
        for (var j = 0; j < 180; j += 0.5) {
            var index = floor(map(j, 0, 180, 0, wave.length - 1))

            var r = map(wave[index], -1, 1, 5, 150)

            var x = r * sin(j) * t
            var y = r * cos(j)
            vertex(x, y)
        }
        stroke(255, 204, 0);
        endShape();
  }
  var p = new Particle();
    particles.push(p);

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
        this.pos = p5.Vector.random2D().mult(150); //positioning of where the particle circle is
        this.vel = createVector(0, 0); //to make particles move
        this.acc = this.pos.copy().mult(random(0.0001, 0.00001)); //to make them accelerate

        this.w = random(3, 5);

        this.color = [random(200, 255), random(200, 255), random(200, 255),]; //random colors
    }
    update(cond) {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        if (cond) {
            this.pos.add(this.vel)
            this.pos.add(this.vel)
            this.pos.add(this.vel)
        }
    }
    edges() { //to make particles go away after leaving canvas
        if (this.pos.x < -width / 2 ||this.pos.x > width / 2 || this.pos.y < -height || this.pos.y > height) {
                return true
            } else {
                return false
            }
    }
    show() {
        noStroke();
        fill(this.color);
        ellipse(this.pos.x, this.pos.y, this.w);
    }
}