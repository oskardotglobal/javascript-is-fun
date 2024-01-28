export class CIterator {
    /**
     * @param {T[]} array
     * @template T
     */
    constructor(array) {
        this.array = array;
        this.current = 0;
    }

    /**
     * @returns {T}
     * @template T
     */
    next() {
        if (!this.hasNext()) throw "No more entities left in iterator";
        return this.array[this.current++];
    }

    /**
     * @returns {boolean}
     */
    hasNext() {
        return this.current < this.array.length;
    }

    /**
     * @returns {T}
     * @template T
     */
    peek() {
        return this.array[this.current];
    }

    reset() {
        this.current = 0;
    }
}