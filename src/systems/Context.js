import {CIterator} from "../util/CIterator.js";
import {Listener} from "../api/event/Listener.js";
import {ClickState} from "../components/states/ClickState.js";

export class Context extends Listener {
    /** @type {GameState} */
    state;

    /** @type {CIterator.<Entity>} */
    iter;

    /** @param {Manager} manager */
    constructor(manager) {
        super();

        this.state = new ClickState();
        this.manager = manager;

        this.iter = new CIterator(this.manager.elements);
    }

    /** @param {GameState} newState */
    changeState(newState) {
        this.state.exit(this);
        this.state = newState;
        newState.enter(this);
    }

    handle() {
        this.state.do(this);
    }
}