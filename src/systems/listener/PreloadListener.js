import {Listener} from "../../api/event/Listener.js";

export class PreloadListener extends Listener {
    /**
     * @param {Manager} manager
     */
    constructor(manager) {
        super();

        this.manager = manager;
    }

    handle() {
        this.manager.bgImage = loadImage("img/xmas.JPG");
    }
}