/**
 * Manager class. Use `ManagerFactory` to create a new instance.
 * Use `ManagerFactory.get()` to get the current instance.
 * @class
 */
class Manager {
    /** @type {Circle} */
    player;

    /** @type {CElement[]} */
    elements;

    /** @type {p5.Image | null} */
    background;

    /**
     * @private
     */
    constructor() {
        this.elements = [
            new Letter(
                new Color(0, 200, 0, 255),
                new Vec2D(900, 200),
                new Font("Apple LiSung Light", 140),
                "X"
            ),

            new Letter(
                new Color(255, 0, 0, 255),
                new Vec2D(700, 400),
                new Font("Apple LiSung Light", 140),
                "M"
            ),

            new Letter(
                new Color(0, 0, 255, 255),
                new Vec2D(1200, 500),
                new Font("Apple LiSung Light", 140),
                "A"
            ),

            new Letter(
                new Color(0, 255, 255, 255),
                new Vec2D(350, 500),
                new Font("Apple LiSung Light", 140),
                "S"
            )
        ];

        this.player = new Circle(
            new Color(200, 200, 50, 205),
            new Vec2D(100, 200),
            100
        );

        this.background = null;
    }

    /**
     * Draw all elements to the screen.
     * Called once a frame by p5.js.
     */
    draw() {
        background(this.background);

        this.elements.forEach(element => element.draw());
        this.player.draw();
    }
}

/**
 * Factory class for `Manager`.
 * @class
 */
class ManagerFactory {
    /**
     * Create a new instance.
     * @returns {Manager}
     */
    static create() {
        window.manager = new Manager();
        return window.manager;
    }

    /**
     * Get the current instance. Creates an instance if it doesn't exist.
     * @returns {Manager}
     */
    static get() {
        if (!window.manager) {
            return ManagerFactory.create();
        }

        return window.manager;
    }
}