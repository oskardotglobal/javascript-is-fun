import {GameState} from "../GameState.js";

export class ClickState extends GameState {
    /** @param {Context} ctx */
    do(ctx) {
        ctx.manager.draw();
    }

    enter(_ctx) {
    }

    exit(_ctx) {
    }
}