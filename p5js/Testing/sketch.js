let size;
let topLeftCorner;
let squareSize;

let ph;
let peh;
let penh;

let c;

let ratio;

function setup() {
    size = floor(sort([windowHeight, windowWidth])[0] * 0.99);
    createCanvas(windowWidth*0.99, windowHeight*0.99);
}

function draw() {
    background(0);

    textSize(32);
    fill(255);
    noStroke()
    if (touches.length > 0) {
        text(touches[0].x, 100, 100);
        text(touches[0].x, 150, 100);
    }
}

