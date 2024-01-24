/** @interface */
class State {
    /**
     * @abstract
     * @param {Context} _ctx
     * @returns void
     */
    static do(_ctx) {
        throw "Interface method not implemented";
    }

    /**
     * @returns void
     * @param {Context} _ctx
     */
    static enter(_ctx) {

    }
}

class States {
    /** @type {State} */
    static CLICK = class extends State {
        /** @param {Context} ctx */
        static do(ctx) {
            ctx.manager.draw();
        }
    }

    /** @type {State} */
    static MOVE_TO_LETTER = class extends State {
        /** @param {Context} ctx */
        static do(ctx) {
            const {iter, manager} = ctx;

            /** @type {Letter} */
            const letter = iter.peek();

            /** @type {Circle} */
            const player = manager.player;

            if (player.position.equals(letter.position)) {
                ctx.enter(States.SHOW_LETTER);
                return;
            }

            const by = new Vec2D(2, 2);
            const delta = letter.position.sub(player.position);
            const normalized = delta.normalized();

            if (delta.length() < 1 || !isFinite(normalized.x)) {
                ctx.enter(States.SHOW_LETTER);
                return;
            }

            player.position = player.position.add(normalized.mult(by));
            manager.draw();
        }
    }

    /** @type {State} */
    static SHOW_LETTER = class extends State {
        /** @param {Context} ctx */
        static do(ctx) {
            ctx.manager.draw();
        }

        /**
         * @override
         * @param {Context} ctx
         */
        static enter(ctx) {
            setTimeout(function () {
                if (!ctx.iter.hasNext()) {
                    return ctx.enter(States.CLICK);
                }

                ctx.iter.next();
                ctx.enter(States.MOVE_TO_LETTER);
            }, 1000);
        }
    }
}

class Context {
    /** @type {State} */
    state;

    /** @param {Manager} manager */
    constructor(manager) {
        this.state = States.CLICK;
        this.manager = manager;
        this.iter = new CIterator(this.manager.elements);
    }

    do() {
        this.state.do(this);
    }

    /** @param {State} newState */
    enter(newState) {
        this.state = newState;
        this.state.enter(this);
    }
}