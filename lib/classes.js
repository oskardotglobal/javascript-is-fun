class Element {
    /**
     * @param {Color} color
     * @param {Position} position
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

class Timer {
    /**
     * @param {function} callback
     * @param {number} timeout Time in seconds
     */
    constructor(callback, timeout) {
        this.callback = callback;
        this.timeout = timeout;
        this.timer = NaN;
    }

    start() {
        this.timer = setTimeout(this.callback, this.timeout * 1000);
    }

    stop() {
        if (isNaN(this.timer)) return;

        clearTimeout(this.timeout);
        this.timeoutId = NaN;
    }

    reset() {
        this.stop();
        this.start();
    }
}

class Iterator {
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
}