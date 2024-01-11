const manager = ManagerFactory.create();

function preload() {
    manager.background = loadImage("img/xmas.JPG");
}

function setup() {
    const canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("container");

    noStroke();
}

function draw() {
    manager.draw();
}

function mousePressed() {
    manager.player.position = new Position(mouseX, mouseY);
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}

function keyPressed() {
    function jumpToCircle(iter, timeout) {
        if (!iter.hasNext()) return;

        setTimeout(() => manager.player.position = iter.next().position, timeout);
        jumpToCircle(iter, timeout + 1000);
    }

    jumpToCircle(new Iterator(manager.elements), 0);
}