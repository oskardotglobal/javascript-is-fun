import {Listener} from "../../api/event/Listener.js";

export class SetupListener extends Listener {
    /**
     * @param {Manager} manager
     */
    constructor() {
        super();
    }

    handle() {
        const canvas = createCanvas(window.innerWidth, window.innerHeight);
        canvas.parent("container");

        noStroke();
        textAlign(CENTER, CENTER);
        frameRate(60);
    }
}