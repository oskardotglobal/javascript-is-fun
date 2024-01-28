import {Listener} from "../../api/event/Listener.js";
import {Manager} from "../../Manager.js";
import {Vec2D} from "../../api/Vec2D.js";

export class MousePressedListener extends Listener {
    /**
     * @param {Manager} manager
     */
    constructor(manager) {
        super();

        this.manager = manager;
    }

    handle() {
        this.manager.player.position = new Vec2D(mouseX, mouseY);
    }
}