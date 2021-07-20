const TOGGLE_CLASS_NAME = 'show-it';

/**
 * @param {object} el - element we're testing
 */

const itHasTarget = (el) => {
    // determine the target of el depending on `data-controls` or the
    // next sibling of el, if any
    const itHasControls = document.getElementById(el.dataset.controls);
    const itHasSibling = el.nextElementSibling;

    if (itHasControls) {
        // element controlled by el
        return itHasControls;
    } else if (itHasSibling) {
        // next sibling of el
        return itHasSibling;
    } else {
        // we don't know what to toggle
        throw new Error(`It needs data-controls or a sibling to toggle: ${el}`);
    }
};

/**
 * @param {object} el - element we're testing
 * @param {string} [toggleClass] - name of class to be toggled
 */

export const isItOpen = (el, toggleClass = TOGGLE_CLASS_NAME) => {
    // decide if el is open depending on `aria-expanded` or the
    // visibility of the target of el
    const itHasExpanded = el.getAttribute('aria-expanded');
    const itHasATarget = itHasTarget(el);

    if (itHasExpanded) {
        // is el expanded?
        return itHasExpanded === 'true';
    } else if (itHasATarget) {
        // is target visible?
        return itHasATarget.classList.contains(toggleClass);
    } else {
        // we don't know what to toggle
        throw new Error(`It needs aria-expanded or a sibling to toggle: ${el}`);
    }
};

/**
 * @param {object} el - element we're toggling
 * @param {string} [toggleClass] - name of class to be toggled
 */

export const toggleIt = (el, toggleClass = TOGGLE_CLASS_NAME) => {
    let expanded = isItOpen(el, toggleClass);
    let menu = itHasTarget(el);

    el.setAttribute('aria-expanded', !expanded);
    menu.classList.toggle(toggleClass);
};

/**
 * @param {object} el - element we're opening
 * @param {string} [toggleClass] - name of class to be toggled
 */

export const openIt = (el, toggleClass = TOGGLE_CLASS_NAME) => {
    el.setAttribute('aria-expanded', true);
    itHasTarget(el).classList.add(toggleClass);
};

/**
 * @param {object} el - element we're closing
 * @param {string} [toggleClass] - name of class to be toggled
 */

export const closeIt = (el, toggleClass = TOGGLE_CLASS_NAME) => {
    el.setAttribute('aria-expanded', false);
    itHasTarget(el).classList.remove(toggleClass);
};
