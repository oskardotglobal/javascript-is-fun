import {Entity} from "../api/ecs/Entity.js";

export class Circle extends Entity {
    /**
     * @param {Color} color
     * @param {Vec2D} position
     * @param {number} diameter
     */
    constructor(color, position, diameter) {
        super(color, position);
        this.diameter = diameter;
    }

    draw() {
        fill(this.color.red, this.color.green, this.color.blue, this.color.alpha);
        ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
    }
}