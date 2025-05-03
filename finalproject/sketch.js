let size = 50; let num = 3

function setup() {
    createCanvas(400, 400, WEBGL);
}

function draw() {
    background(220);
    orbitControl();
    
    for (let i=0; i<num; i++) {
        push();
        translate(i*size, 0);
        box(50);
        pop();
    }
}