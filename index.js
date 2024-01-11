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
    manager.player.position = new Vec2D(mouseX, mouseY);
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
     * @recursive
     */
    function glide(by, to) {
        if (player.position.equals(to)) return;

        const delta = to.sub(player.position);
        const normalized = delta.normalized();

        if (delta.length() === 0 || !isFinite(normalized.x)) return;

        player.position = player.position.add(normalized.add(by));
        setTimeout(() => glide(by, to), 60 / 1000);
    }

    /**
     * @param {CIterator} iter
     * @recursive
     */
    function jumpToLetter(iter) {
        if (!iter.hasNext()) return;

        glide(new Vec2D(1, 1), iter.peek().position);

        setTimeout(() => {
            player.position = iter.next().position
            jumpToLetter(iter);
        }, 1000);
    }

    jumpToLetter(new CIterator(manager.elements));
}