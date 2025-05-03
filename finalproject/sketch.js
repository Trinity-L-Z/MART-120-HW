let size = 50; let num = 3

function setup() {
    createCanvas(400, 400, WEBGL);
}

function draw() {
    background(220);
    orbitControl();
    
    for (let i=0; i<num; i++) {
        for (let j=0; j<num; j++) {
        push();
        translate(i*size, j*size);
        box(50);
        pop();    
        }
    }
}