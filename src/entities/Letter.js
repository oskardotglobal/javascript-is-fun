import {Entity} from "../api/ecs/Entity.js";

export class Letter extends Entity {
    /**
     * @param {Color} color
     * @param {Vec2D} position
     * @param {Font} font
     * @param {string} content
     */
    constructor(color, position, font, content) {
        super(color, position);
        this.font = font;
        this.content = content;
    }

    draw() {
        fill(this.color.red, this.color.green, this.color.blue, this.color.alpha);
        textSize(this.font.size);
        textFont(this.font.name);
        text(this.content, this.position.x, this.position.y);
    }
}