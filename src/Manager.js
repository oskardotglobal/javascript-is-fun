import {Circle} from "./entities/Circle.js";
import {Letter} from "./entities/Letter.js";
import {Context} from "./systems/Context.js";
import {Listeners} from "./api/event/Listeners.js";
import {KeyPressedListener} from "./systems/listener/KeyPressedListener.js";
import {Events} from "./api/event/Events.js";
import {PreloadListener} from "./systems/listener/PreloadListener.js";
import {SetupListener} from "./systems/listener/SetupListener.js";
import {MousePressedListener} from "./systems/listener/MousePressedListener.js";
import {WindowResizedListener} from "./systems/listener/WindowResizedListener.js";
import {Vec2D} from "./api/Vec2D.js";
import {Color} from "./api/Color.js";
import {Font} from "./api/Font.js";

/**
 * Manager class. Use `Manager.get()` to get the current instance.
 * @class
 */
export class Manager {
    /** @type {Circle} */
    player;

    /** @type {Entity[]} */
    elements;

    /** @type {p5.Image} */
    bgImage;

    /** @type {Context} */
    state;

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

        this.state = new Context(this);

        this.listeners = Listeners.get();

        this.listeners.register(Events.PRELOAD, new PreloadListener(this))
        this.listeners.register(Events.SETUP, new SetupListener());

        this.listeners.register(Events.DRAW, this.state)

        this.listeners.register(Events.MOUSE_PRESSED, new MousePressedListener(this));
        this.listeners.register(Events.KEY_PRESSED, new KeyPressedListener(this));

        this.listeners.register(Events.WINDOW_RESIZED, new WindowResizedListener());
    }

    /**
     * Draw all entities to the screen.
     * Called once a frame by `Context`.
     */
    draw() {
        background(this.bgImage);

        this.elements.forEach(element => element.draw());
        this.player.draw();
    }
}

new Manager();