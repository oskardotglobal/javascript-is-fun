class CElement {
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
     */
    draw() {
        throw "Abstract method not implemented";
    }
}

class CIterator {
    /**
     * @param {any[]} array
     */
    constructor(array) {
        this.array = array;
        this.current = 0;
    }

    /**
     * @returns {any}
     */
    next() {
        if (!this.hasNext()) throw "No more elements left in iterator";
        return this.array[this.current++];
    }

    /**
     * @returns {boolean}
     */
    hasNext() {
        return this.current < this.array.length;
    }

    /**
     * @returns {any}
     */
    peek() {
        return this.array[this.current];
    }

    reset() {
        this.current = 0;
    }
}