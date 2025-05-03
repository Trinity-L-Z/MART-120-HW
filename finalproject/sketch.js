let size = 50; let num = 3

function setup() {
    createCanvas(400, 400, WEBGL);
}

function draw() {
    background(220);
    orbitControl();
    
    //for position in the center
    let offset = size/2 -num/2 * size
    push();
    translate(offset, offset, offset);
    noFill();

    //x direction
    for (let i=0; i<num; i++) {
        //y direction
        for (let j=0; j<num; j++) {
            //z direction
            for (let k=0; k<num; k++) {
                push();
                translate(i*size, j*size, k*size);
                box(50);
                pop();    
            }
        }
    }
    pop();

}