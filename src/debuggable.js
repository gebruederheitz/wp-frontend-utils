export class Debuggable {
    constructor(prefix = '') {
        this.prefix = prefix;
        this.globalJsDebug = Debuggable.prototype.globalJsDebug;
    }

    get debug() {
        if (this.globalJsDebug || this?.options?.debug === true) {
            if (this.prefix) {
                return {
                    log: this._wrappedLog.bind(this),
                    warn: this._wrappedWarn.bind(this),
                    error: this._wrappedError.bind(this),
                };
            } else {
                return console;
            }
        } else {
            return {
                log() {},
                warn() {},
                error() {},
            };
        }
    }

    _wrappedLog(...args) {
        console.log(`[${this.prefix}]`, ...args);
    }

    _wrappedWarn(...args) {
        console.warn(`[${this.prefix}]`, ...args);
    }

    _wrappedError(...args) {
        console.error(`[${this.prefix}]`, ...args);
    }

    /**
     * Toggle global JS debug output on or off.
     *
     * @param {boolean} toggle
     */
    setGlobalDebug(toggle) {
        Debuggable.prototype.globalJsDebug = toggle;
    }
}

Debuggable.prototype.globalJsDebug = false;
