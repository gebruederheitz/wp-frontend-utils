# WP Frontend Utilities

_Some JS helpers for easier Wordpress frontend development_


## Installation

```shell
> npm i @gebruederheitz/wp-frontend-utils
```

## Usage

### Element creator

```js
import { createDomElement, createSvgElement } from '@gebruederheitz/wp-frontend-utils';

const newDiv = createDomElement({
    innerText: 'Hello',
    parent: window.document.body,
});

const list = createDomElement({
    type: 'UL',
    classNames: ['my-pretty-list', 'mt5'],
});
for (var i = 0; i < 5; i++) {
    createDomElement({
        type: 'LI',
        classNames: ['my-pretty-list__item'],
        attributes: {
            dataIndex: i,
        },
        innerHtml: `<span>List item number <em>${i}</em>!</span>`,
        parent: list,
    });
}
document.body.appendChild(list);

// Uses createElementNS() to create a namespaced, valid SVG element
const svg = createSvgElement({
    parent: document.querySelector('.svg-container'),
    classNames: [],
    attributes: {},
});

```


### Debuggable class

Convenient toggle for namespaced debug output as an extensible class.

```js
import { Debuggable } from '@gebruederheitz/wp-frontend-utils';

class MyClass extends Debuggable {
    constructor() {
        // Set the namespace for the class – debug output will be prefixed with this.
        super('MyClass');
    }
    
    logSomething() {
        // Will log "[MyClass]: Test" when (and only if) debug output is enabled
        this.debug.log('Test');
    }
}

// Toggle debug output for all classes inheriting from Debuggable
Debuggable.setGlobalDebug(true);
Debuggable.setGlobalDebug(false);

// Setting debug output per instance
class OtherClass extends Debuggable {
    constructor(options = {debug: false}) {
        super('OtherClass');
        this.options = options;
    }
    
    logSomething() {
        this.debug.log('Test');
    }
}

const otherSilent = new OtherClass();
const otherLoud = new OtherClass({debug: true});

otherSilent.logSomething() // no output
otherLoud.logSomething() // "[OtherClass]: Test"

Debuggable.setGlobalDebug(true);
otherSilent.logSomething() // "[OtherClass]: Test"
```

### Key Codes

A simple map of key codes to keys:

```js
import { keyCodes } from '@gebruederheitz/wp-frontend-utils';

console.log(keyCodes[82]); // "r"
```


### Query Selector

> I see you'd still rather be writing jQuery

Shorthands for querySelector\[All\]:

```js
import { $, $$ } from '@gebruederheitz/wp-frontend-utils';

const one = $()('.classname');  // = document.querySelector('.classname')
const two = $(one)('[data-attribute]'); // = one.querySelelctor('[data-attribute]')
const three = $$()('#id'); // = document.querySelectorAll('#id')
const four = $$(two)('li'); // = two.querySelelctorAll('li')
```


### Show/Hide

Simple functions to show or hide elements.

```js
import { $, isItOpen, toggleIt, openIt, closeIt } from '@gebruederheitz/wp-frontend-utils';

const element = $()('.test-element');

// Will return true if the element has the class 'show-it' and an attribute 
// 'aria-expanded' which is true – or if it has an attribute 'aria-controls'
// referencing a valid element which has the class 'show-it' or has a sibling
// element with that class.
// Will throw an error if none of the aria-attributes are present and no
// sibling element can be found.
// Will return false otherwise.
const initiallyOpen = isItOpen(element);

// Same thing, but with a custom class name instead of 'show-it'.
const isThisOpen = isItOpen(element, 'visible');

// To be used on the controlling element: Will set 'aria-expanded' to the 
// opposite of the current state and toggle the class 'show-it' on the target / 
// controlled element.
toggleIt(element);
toggleIt(element, 'visible');

 isItOpen(element) === !initiallyOpen; // true

openIt(element);
 isItOpen(element); // true

closeIt(element);
 isItOpen(element); // false

```

## Development

> (tbd)
