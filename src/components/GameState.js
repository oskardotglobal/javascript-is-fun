/** @interface */
export class GameState {
    /**
     * @abstract
     * @param {Context} _ctx
     * @returns void
     */
    do(_ctx) {
        throw "Interface method not implemented";
    }

    /**
     * @abstract
     * @returns void
     * @param {Context} _ctx
     */
    enter(_ctx) {

    }

    /**
     * @abstract
     * @returns void
     * @param {Context} _ctx
     */
    exit(_ctx) {

    }
}