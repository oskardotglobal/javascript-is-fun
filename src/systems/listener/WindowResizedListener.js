import {Listener} from "../../api/event/Listener.js";

export class WindowResizedListener extends Listener {
    handle() {
        resizeCanvas(window.innerWidth, window.innerHeight);
    }
}