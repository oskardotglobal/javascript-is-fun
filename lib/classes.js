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

class Timer {
    /**
     * @param {function} callback
     * @param {number} timeout Time in milliseconds
     * @param {boolean} start Whether to start the timer immediately. Defaults to false.
     * @param {function} onSuccess Callback to be called when the timer succeeds (when the callback returns a truthy value). Optional.
     */
    constructor(callback, timeout, start = false, onSuccess = () => {}) {
        this.callback = () => {
            const success = callback();

            if (success) {
                onSuccess();
            }

            this.timer = NaN;
        };

        this.timeout = timeout;
        this.timer = NaN;

        if (start) {
            this.start();
        }
    }

    start() {
        this.timer = setTimeout(this.callback, this.timeout);
    }

    stop() {
        if (isNaN(this.timer)) return;

        clearTimeout(this.timer);
        this.timer = NaN;
    }

    reset() {
        this.stop();
        this.start();
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
}