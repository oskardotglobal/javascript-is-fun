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
     * @param {CIterator} iter
     * @recursive
     */
    function jumpToLetter(iter) {
        if (!iter.hasNext()) return;

        /** @type {Letter} */
        const letter = iter.next();

        const timer = new Timer(
            () => {
                if (player.position.equals(letter.position)) return true;

                const by = new Vec2D(1, 1);
                const delta = letter.position.sub(player.position);
                const normalized = delta.normalized();

                if (delta.length() < 1 || !isFinite(normalized.x)) return true;

                player.position = player.position.add(normalized.mult(by));
                timer.reset();

                return false;
            },
            60 / 1000,
            true,
            () => setTimeout(() => jumpToLetter(iter), 1000)
        );
    }

    jumpToLetter(new CIterator(manager.elements));
}