import {Events} from "./Events.js";

export class Listeners {
    /** @type {{ type: string, instances: Listener[] }} */
    listeners;

    /**
     * @private
     */
    constructor() {
        this.listeners = {};

        for (const event of Object.values(Events)) {
            window[event] = () => this.handle(event);
        }
    }

    /**
     * Get the current instance. Creates an instance if it doesn't exist.
     * @returns {Listeners}
     */
    static get() {
        if (!window.listeners) {
            window.listeners = new Listeners();
        }

        return window.listeners;
    }

    /**
     * @param {string} type
     */
    handle(type) {
        if (!this.listeners[type]) return;
        this.listeners[type].forEach(listener => listener.handle());
    }

    /**
     * @param {string} type
     * @param {Listener} listener
     */
    register(type, listener) {
        if (!this.listeners[type]) this.listeners[type] = [];

        this.listeners[type].push(listener);
    }
}