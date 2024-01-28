export class Entity {
    /**
     * @param {Color} color
     * @param {Vec2D} position
     */
    constructor(color, position) {
        this.color = color;
        this.position = position;
    }

    /**
     * @abstract
     * @returns void
     */
    draw() {
        throw "Abstract method not implemented";
    }
}