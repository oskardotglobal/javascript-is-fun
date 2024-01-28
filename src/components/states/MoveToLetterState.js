import {GameState} from "../GameState.js";
import {ShowLetterState} from "./ShowLetterState.js";

export class MoveToLetterState extends GameState {
    /** @param {Context} ctx */
    do(ctx) {
        const {iter, manager} = ctx;

        /** @type {Letter} */
        const letter = iter.peek();

        if (!letter) {
            ctx.changeState(new ShowLetterState());
            return;
        }

        /** @type {Circle} */
        const player = manager.player;

        if (player.position.equals(letter.position)) {
            ctx.changeState(new ShowLetterState());
            return;
        }

        const by = new Vec2D(2, 2);
        const delta = letter.position.sub(player.position);
        const normalized = delta.normalized();

        if (delta.length() < 1 || !isFinite(normalized.x)) {
            ctx.changeState(new ShowLetterState());
            return;
        }

        player.position = player.position.add(normalized.mult(by));
        manager.draw();
    }

    enter(_ctx) {
    }

    exit(_ctx) {
    }
}