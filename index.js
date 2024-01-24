function preload() {
    ManagerFactory.get().background = loadImage("img/xmas.JPG");
}

function setup() {
    const canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("container");

    noStroke();
    textAlign(CENTER, CENTER);
    frameRate(60);
}

function draw() {
    ManagerFactory.get().state.do();
}

function mousePressed() {
    ManagerFactory.get().player.position = new Vec2D(mouseX, mouseY);
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}

function keyPressed() {
    ManagerFactory.get().state.enter(States.MOVE_TO_LETTER);
}