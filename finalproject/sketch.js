var song, fft, fftLin;
var spectrumScale = 1;
var linNum = 40;
var c = 0;
var f = [];
var d = [];

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
  fftLin = fft.linAverages(linNum);
  noStroke();
  fill(0, 0, 0, 20);
  rect(0, 0, width, height);
  translate(width/2, height/2);
  
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
  
  rotate(radians(c));
  for(var i = 0; i < fftLin.length; i++){
    strokeWeight(3);
    if(i % 2 == 1) {
      stroke(255); //white circles
    } else {
      stroke(255, 0, 100); //circle outside color
    }
    if(i == 0) {
      ellipse(f[i], d[i], fftLin[i]*spectrumScale*2, fftLin[i]*spectrumScale*2);
    } else {
      noFill();
      ellipse(f[i], d[i], fftLin[i]*spectrumScale, fftLin[i]*spectrumScale);
    }
  }
  c += 0.3;
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