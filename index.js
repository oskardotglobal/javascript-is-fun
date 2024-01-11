window.onresize = () => setup();

let canvas;
let img;

const circle = new Circle(
    new Color(200, 200, 50, 205),
    new Position(100, 200),
    100
);

const elements = [
    new Letter(
        new Color(0, 200, 0, 255),
        new Position(900, 200),
        new Font("Apple LiSung Light", 140),
        "X"
    ),

    new Letter(
        new Color(255, 0, 0, 255),
        new Position(700, 400),
        new Font("Apple LiSung Light", 140),
        "M"
    ),

    new Letter(
        new Color(0, 0, 255, 255),
        new Position(1200, 500),
        new Font("Apple LiSung Light", 140),
        "A"
    ),

    new Letter(
        new Color(0, 255, 255, 255),
        new Position(350, 500),
        new Font("Apple LiSung Light", 140),
        "S"
    ),

    circle
];

function preload() {
    img = loadImage("img/xmas.JPG");
}

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("container");

    // @ts-expect-error
    noStroke();
}

function draw() {
    background(img);
    elements.forEach(element => element.draw());
}

function mousePressed() {
    // @ts-expect-error
    circle.position.x = mouseX;
    // @ts-expect-error
    circle.position.y = mouseY;
}

function keyPressed() {
    const letters = elements.slice(0, 3);

    for (let i = 0; i < letters.length; i++) {
        let letter = letters[i];
        setTimeout(() => circle.position = letter.position, 2000 * i)
    }
}