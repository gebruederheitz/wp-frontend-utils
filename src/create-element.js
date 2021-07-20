/**
 * @param {object}    options
 * @param {string}    options.type
 * @param {string[]}  options.classNames
 * @param {object}    options.attributes
 * @param {Element}   options.parent
 * @param {?string}   options.innerHtml
 * @param {?string}   options.innerText
 * @return {HTMLElement}
 */
export const createDomElement = ({
    type = 'DIV',
    classNames = [],
    attributes = {},
    parent,
    innerHtml = null,
    innerText = null,
}) => {
    const element = document.createElement(type);
    if (classNames && classNames.length) {
        element.classList.add(...classNames);
    }
    for (let attributeName in attributes) {
        element.setAttribute(attributeName, attributes[attributeName]);
    }
    if (innerHtml) {
        element.innerHTML = innerHtml;
    }
    if (innerText) {
        element.innerText = innerText;
    }

    if (parent) {
        parent.appendChild(element);
    }
    return element;
};

/**
 * @param {object}    options
 * @param {string}    options.type
 * @param {string[]}  options.classNames
 * @param {object}    options.attributes
 * @param {Element}   options.parent
 * @return {HTMLElement|SVGElement}
 */
export function createSvgElement({
    type = 'svg',
    classNames = [],
    attributes = {},
    parent,
}) {
    const svgNs = 'http://www.w3.org/2000/svg';
    const element = document.createElementNS(svgNs, type);
    if (classNames && classNames.length) {
        element.classList.add(...classNames);
    }
    for (let attributeName in attributes) {
        element.setAttribute(attributeName, attributes[attributeName]);
    }
    if (parent) {
        parent.appendChild(element);
    }
    return element;
}
