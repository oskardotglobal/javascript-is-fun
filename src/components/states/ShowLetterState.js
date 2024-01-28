import {GameState} from "../GameState.js";
import {ClickState} from "./ClickState.js";
import {MoveToLetterState} from "./MoveToLetterState.js";

export class ShowLetterState extends GameState {
    /** @param {Context} ctx */
    do(ctx) {
        ctx.manager.draw();
    }

    /**
     * @override
     * @param {Context} ctx
     */
    enter(ctx) {
        if (!ctx.iter.hasNext()) {
            ctx.changeState(new ClickState());
            ctx.iter.reset();

            return;
        }

        setTimeout(function () {
            ctx.iter.next();
            ctx.changeState(new MoveToLetterState());
        }, 1000);
    }

    exit(_ctx) {
    }
}