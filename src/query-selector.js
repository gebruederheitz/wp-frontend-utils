export const $ = (parent = window.document) => {
    return (...args) => {
        if (typeof parent.querySelector !== 'undefined') {
            return parent.querySelector.call(parent, ...args);
        }
    };
};

export const $$ = (parent = window.document) => {
    return (...args) => {
        if (typeof parent.querySelectorAll !== 'undefined') {
            return parent.querySelectorAll.call(parent, ...args);
        }
    };
};
