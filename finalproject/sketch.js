let size = 15; let num = 10
let grid = [];

function setup() {
    createCanvas(400, 400, WEBGL);
    for (let i=0; i<num; i++) {
        grid[i] = [];
        for (let j=0; j<num; j++) {
            grid[i][j] = [];
            for (let k=0; k<num; k++) {
                grid[i][j][k] = floor(random(2));
            }
        }
    }
}

function draw() {
    background(220);
    orbitControl();
    
    //for position in the center
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