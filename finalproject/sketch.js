let size = 15; let num = 10
let grid = [];

let song; let fft;
let spectrum = [];
let distFromCenter = []:

function preload() {
    song = loadSound("machine.mp3");
}

function setup() {
    createCanvas(400, 400, WEBGL);
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

                distFromCenter.push({x, y, z, distance});
                print(distFromCenter);
            }
        }
    }
}

function draw() {
    background(220);
    orbitControl();

    spectrum = fft.analyze();
    
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
                if (grid[i][j][k] == 1) {
                    fill(255, 0, 0); //red
                } else {
                    fill (255); //white
                }

                push();
                translate(i*size, j*size, k*size);
                box(size - size/4);
                pop();    
            }
        }
    }
}