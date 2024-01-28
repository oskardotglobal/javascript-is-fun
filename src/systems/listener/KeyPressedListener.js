import {Listener} from "../../api/event/Listener.js";
import {Manager} from "../../Manager.js";
import {MoveToLetterState} from "../../components/states/MoveToLetterState.js";

export class KeyPressedListener extends Listener {
    /**
     * @param {Manager} manager
     */
    constructor(manager) {
        super();

        this.manager = manager;
    }

    handle() {
        this.manager.state.changeState(new MoveToLetterState());
    }
}