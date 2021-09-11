/**
 * validate require form elements
 */
class FormValidation {
    /**
     *
     * @param { string } formSelector - form selector
     * @param onInvalid - invalid event callback
     * @param onFocusIn - focusin event callback
     * @param invalidClassName - class name for invalid input
     */
    constructor({ formSelector, onInvalid, onFocusIn, invalidClassName }) {
        this.formSelector = formSelector;
        this.onInvalid = onInvalid;
        this.onFocusIn = onFocusIn;
        this.invalidClassName = invalidClassName;

        this.init();
    }

    /**
     * handler invalid
     * @param { Object } e - default event
     * @private
     */

    _handlerInvalid = e => {
        const { target } = e;

        if (target.closest(this.formSelector)) {
            e.preventDefault();
            target.classList.add(this.invalidClassName);

            if (this.onInvalid) {
                this.onInvalid(e);
            }
        }
    }

    /**
     * handler focusin
     * @param e - native event
     * @private
     */
    _handlerFocusIn = e => {
        const { target } = e;
        if (target.closest(this.formSelector)) {
            target.classList.remove(this.invalidClassName);

            if (this.onFocusIn) {
                this.onFocusIn(e);
            }
        }
    }


    /**
     * init events for validation
     * @return void
     */
    events() {
        document.addEventListener('invalid',  this._handlerInvalid, true);
        document.addEventListener('focusin',  this._handlerFocusIn, true);
    }

    /**
     * init formValidation
     * @return void
     */
    init() {
        this.events();
    }

    /**
     * destroy formValidation
     * @return void
     */
    destroy() {
        document.removeEventListener('invalid',  this._handlerInvalid, true);
        document.removeEventListener('focusin',  this._handlerFocusIn, true);
    }
}