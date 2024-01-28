class Circle extends CElement {
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

class Letter extends CElement {
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