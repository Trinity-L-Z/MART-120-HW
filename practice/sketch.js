let size = 15; let num = 10
let grid = []; let min = 150;

let button;

let song; let fft;
let spectrum = [];
let distFromCenter = [];

function preload() {
    song = loadSound("machine.mp3");
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

function setup() {
    createCanvas(400, 400, WEBGL);
    button = createButton("play");
    button.mousePressed(togglePlaying);
    fft = new p5.FFT();

    for (let i=0; i<num; i++) {
        grid[i] = [];
        for (let j=0; j<num; j++) {
            grid[i][j] = [];
            for (let k=0; k<num; k++) {
                grid[i][j][k] = floor(random(2));
                
                let offset = size/2 - num/2*size;
                let x = i*size + offset;
                let y = j*size + offset;
                let z = k*size + offset;
                let distance = dist(x, y, z, 0, 0, 0);

                distFromCenter.push({i, j, k, distance});
            }
        }
    }
    distFromCenter.sort(compareDistances);
}

//function for telling how to sort the values
function compareDistances(a, b) {
    return a.distance - b.distance;
}

function draw() {
    background(220);
    orbitControl();

    spectrum = fft.analyze();
    let vol = fft.getEnergy(20, 140);
    if (vol > 240) {
        stroke(255, 255, 0, 20); //yellow, smaller transparency
    } else {
        stroke (0, 20); //black, same transparency
    }

    let totalCubes = num*num*num;
    for (let i=0; i<totalCubes; i++) {
        let pos = distFromCenter[i]; //position
        let c = map(spectrum[i], 0, 255, min, 255); //color
        grid[pos.i][pos.j][pos.k] = c;
    }
    
    //for positioning in the center
    let offset = size/2 -num/2 * size
    translate(offset, offset, offset);
    noFill();

    //x direction
    for (let i=0; i<num; i++) {
        //y direction
        for (let j=0; j<num; j++) {
            //z direction
            for (let k=0; k<num; k++) {
                if (grid[i][j][k] > min) {
                fill(grid[i][j][k], 0, 200); //color  
                } else {
                    noFill();
                }


                push();
                translate(i*size, j*size, k*size);
                box(size - size/4);
                pop();    
            }
        }
    }
}