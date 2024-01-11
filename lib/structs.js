class Color {
    /**
     * @param {number} red
     * @param {number} green
     * @param {number} blue
     * @param {number} alpha
     */
    constructor(red, green, blue, alpha) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }
}

class Vec2D {
    /**
     * @param {number} x
     * @param {number} y
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Add the current vector to another vector.
     * @param {Vec2D} b
     * @returns {Vec2D}
     */
    add(b) {
        return new Vec2D(this.x + b.x, this.y + b.y);
    }

    /**
     * Subtract the current vector from another vector.
     * @param {Vec2D} b
     * @returns {Vec2D}
     */
    sub(b) {
        return new Vec2D(this.x - b.x, this.y - b.y);
    }

    /**
     * Multiply the current vector with another vector.
     * @param {Vec2D} b
     * @returns {Vec2D}
     */
    mult(b) {
        return new Vec2D(this.x * b.x, this.y * b.y);
    }

    /**
     * Returns whether the vector is equal to another vector.
     * @param {Vec2D} b
     * @returns {boolean}
     */
    equals(b) {
        return this.x === b.x && this.y === b.y;
    }

    /**
     * Return a normalized vector, setting its length to 1 but keeping its direction.
     * @returns {Vec2D}
     */
    normalized() {
        const length = this.length();
        return new Vec2D(this.x / length, this.y / length);
    }

    /**
     * Returns the vector's length.
     * @returns {number}
     */
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

class Font {
    /**
     * @param {string} name
     * @param {number} size
     */
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
}
