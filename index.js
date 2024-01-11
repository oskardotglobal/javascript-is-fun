function preload() {
    ManagerFactory.get().background = loadImage("img/xmas.JPG");
}

function setup() {
    const canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("container");

    noStroke();
}

function draw() {
    ManagerFactory.get().draw();
}

function mousePressed() {
    ManagerFactory.get().player.position = new Vec2D(mouseX, mouseY);
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}

function keyPressed() {
    const manager = ManagerFactory.get();
    const player = manager.player;

    /**
     * @param {Vec2D} by
     * @param {Vec2D} to
     * @param {Timer} timer
     * @recursive
     */
    function glide(by, to, timer) {
        if (player.position.equals(to)) return true;

        const delta = to.sub(player.position);
        const normalized = delta.normalized();

        if (delta.length() === 0 || !isFinite(normalized.x)) return true;

        player.position = player.position.add(normalized.mult(by));
        timer.reset();

        return false;
    }

    /**
     * @param {CIterator} iter
     * @recursive
     */
    function jumpToLetter(iter) {
        if (!iter.hasNext()) return;

        const letter = iter.next();
        const timer = new Timer(
            () => glide(new Vec2D(1, 1), letter.position, timer),
            600 / 1000,
            true,
            () => jumpToLetter(iter)
        );
    }

    jumpToLetter(new CIterator(manager.elements));
}