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