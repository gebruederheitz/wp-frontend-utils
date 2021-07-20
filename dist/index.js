import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';

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
var createDomElement = function createDomElement(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'DIV' : _ref$type,
      _ref$classNames = _ref.classNames,
      classNames = _ref$classNames === void 0 ? [] : _ref$classNames,
      _ref$attributes = _ref.attributes,
      attributes = _ref$attributes === void 0 ? {} : _ref$attributes,
      parent = _ref.parent,
      _ref$innerHtml = _ref.innerHtml,
      innerHtml = _ref$innerHtml === void 0 ? null : _ref$innerHtml,
      _ref$innerText = _ref.innerText,
      innerText = _ref$innerText === void 0 ? null : _ref$innerText;
  var element = document.createElement(type);

  if (classNames && classNames.length) {
    var _element$classList;

    (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(classNames));
  }

  for (var attributeName in attributes) {
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

function createSvgElement(_ref2) {
  var _ref2$type = _ref2.type,
      type = _ref2$type === void 0 ? 'svg' : _ref2$type,
      _ref2$classNames = _ref2.classNames,
      classNames = _ref2$classNames === void 0 ? [] : _ref2$classNames,
      _ref2$attributes = _ref2.attributes,
      attributes = _ref2$attributes === void 0 ? {} : _ref2$attributes,
      parent = _ref2.parent;
  var svgNs = 'http://www.w3.org/2000/svg';
  var element = document.createElementNS(svgNs, type);

  if (classNames && classNames.length) {
    var _element$classList2;

    (_element$classList2 = element.classList).add.apply(_element$classList2, _toConsumableArray(classNames));
  }

  for (var attributeName in attributes) {
    element.setAttribute(attributeName, attributes[attributeName]);
  }

  if (parent) {
    parent.appendChild(element);
  }

  return element;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$c =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$7 = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$6 = fails$7;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$6(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var createPropertyDescriptor$3 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var toString = {}.toString;

var classofRaw = function (it) {
  return toString.call(it).slice(8, -1);
};

var fails$5 = fails$7;
var classof$1 = classofRaw;

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$5(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$1(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$2 = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = indexedObject;
var requireObjectCoercible$1 = requireObjectCoercible$2;

var toIndexedObject$3 = function (it) {
  return IndexedObject(requireObjectCoercible$1(it));
};

var isObject$7 = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var isObject$6 = isObject$7;

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var toPrimitive$3 = function (input, PREFERRED_STRING) {
  if (!isObject$6(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$6(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject$6(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$6(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var requireObjectCoercible = requireObjectCoercible$2;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$2 = function (argument) {
  return Object(requireObjectCoercible(argument));
};

var toObject$1 = toObject$2;

var hasOwnProperty = {}.hasOwnProperty;

var has$6 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject$1(it), key);
};

var global$b = global$c;
var isObject$5 = isObject$7;

var document$1 = global$b.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject$5(document$1) && isObject$5(document$1.createElement);

var documentCreateElement = function (it) {
  return EXISTS ? document$1.createElement(it) : {};
};

var DESCRIPTORS$3 = descriptors;
var fails$4 = fails$7;
var createElement = documentCreateElement;

// Thank's IE8 for his funny defineProperty
var ie8DomDefine = !DESCRIPTORS$3 && !fails$4(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$2 = descriptors;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor$2 = createPropertyDescriptor$3;
var toIndexedObject$2 = toIndexedObject$3;
var toPrimitive$2 = toPrimitive$3;
var has$5 = has$6;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$2 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$2(O);
  P = toPrimitive$2(P, true);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has$5(O, P)) return createPropertyDescriptor$2(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};

var objectDefineProperty = {};

var isObject$4 = isObject$7;

var anObject$2 = function (it) {
  if (!isObject$4(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};

var DESCRIPTORS$1 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var anObject$1 = anObject$2;
var toPrimitive$1 = toPrimitive$3;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$1 ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$1(O);
  P = toPrimitive$1(P, true);
  anObject$1(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS = descriptors;
var definePropertyModule$2 = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$3;

var createNonEnumerableProperty$4 = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule$2.f(object, key, createPropertyDescriptor$1(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var redefine$1 = {exports: {}};

var global$a = global$c;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$4;

var setGlobal$3 = function (key, value) {
  try {
    createNonEnumerableProperty$3(global$a, key, value);
  } catch (error) {
    global$a[key] = value;
  } return value;
};

var global$9 = global$c;
var setGlobal$2 = setGlobal$3;

var SHARED = '__core-js_shared__';
var store$3 = global$9[SHARED] || setGlobal$2(SHARED, {});

var sharedStore = store$3;

var store$2 = sharedStore;

var functionToString = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store$2.inspectSource != 'function') {
  store$2.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

var inspectSource$2 = store$2.inspectSource;

var global$8 = global$c;
var inspectSource$1 = inspectSource$2;

var WeakMap$1 = global$8.WeakMap;

var nativeWeakMap = typeof WeakMap$1 === 'function' && /native code/.test(inspectSource$1(WeakMap$1));

var shared$3 = {exports: {}};

var store$1 = sharedStore;

(shared$3.exports = function (key, value) {
  return store$1[key] || (store$1[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.15.2',
  mode: 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

var id = 0;
var postfix = Math.random();

var uid$2 = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

var shared$2 = shared$3.exports;
var uid$1 = uid$2;

var keys = shared$2('keys');

var sharedKey$1 = function (key) {
  return keys[key] || (keys[key] = uid$1(key));
};

var hiddenKeys$3 = {};

var NATIVE_WEAK_MAP = nativeWeakMap;
var global$7 = global$c;
var isObject$3 = isObject$7;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$4;
var objectHas = has$6;
var shared$1 = sharedStore;
var sharedKey = sharedKey$1;
var hiddenKeys$2 = hiddenKeys$3;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global$7.WeakMap;
var set, get, has$4;

var enforce = function (it) {
  return has$4(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$3(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared$1.state) {
  var store = shared$1.state || (shared$1.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has$4 = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys$2[STATE] = true;
  set = function (it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$2(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has$4 = function (it) {
    return objectHas(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has$4,
  enforce: enforce,
  getterFor: getterFor
};

var global$6 = global$c;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$4;
var has$3 = has$6;
var setGlobal$1 = setGlobal$3;
var inspectSource = inspectSource$2;
var InternalStateModule = internalState;

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(redefine$1.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has$3(value, 'name')) {
      createNonEnumerableProperty$1(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global$6) {
    if (simple) O[key] = value;
    else setGlobal$1(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty$1(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});

var global$5 = global$c;

var path$1 = global$5;

var path = path$1;
var global$4 = global$c;

var aFunction$2 = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

var getBuiltIn$2 = function (namespace, method) {
  return arguments.length < 2 ? aFunction$2(path[namespace]) || aFunction$2(global$4[namespace])
    : path[namespace] && path[namespace][method] || global$4[namespace] && global$4[namespace][method];
};

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
var toInteger$2 = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

var toInteger$1 = toInteger$2;

var min$1 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$2 = function (argument) {
  return argument > 0 ? min$1(toInteger$1(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toInteger = toInteger$2;

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$1 = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

var toIndexedObject$1 = toIndexedObject$3;
var toLength$1 = toLength$2;
var toAbsoluteIndex = toAbsoluteIndex$1;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$1($this);
    var length = toLength$1(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

var has$2 = has$6;
var toIndexedObject = toIndexedObject$3;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$1 = hiddenKeys$3;

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has$2(hiddenKeys$1, key) && has$2(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has$2(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$1 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys = objectKeysInternal;
var enumBugKeys = enumBugKeys$1;

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$1 = getBuiltIn$2;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject = anObject$2;

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$1('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

var has$1 = has$6;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$1 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$1.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has$1(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

var fails$3 = fails$7;

var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails$3(detection)
    : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';

var isForced_1 = isForced$1;

var global$3 = global$c;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty = createNonEnumerableProperty$4;
var redefine = redefine$1.exports;
var setGlobal = setGlobal$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced = isForced_1;

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$3;
  } else if (STATIC) {
    target = global$3[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global$3[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};

var aFunction$1 = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};

var aFunction = aFunction$1;
var isObject$2 = isObject$7;

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func -- we have no proper alternatives, IE8- only
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
var functionBind = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject$2(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};

var $$2 = _export;
var bind = functionBind;

// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
$$2({ target: 'Function', proto: true }, {
  bind: bind
});

var classof = classofRaw;

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray$2 = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};

var toPrimitive = toPrimitive$3;
var definePropertyModule = objectDefineProperty;
var createPropertyDescriptor = createPropertyDescriptor$3;

var createProperty$1 = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};

var getBuiltIn = getBuiltIn$2;

var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

var global$2 = global$c;
var userAgent = engineUserAgent;

var process = global$2.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

var engineV8Version = version && +version;

/* eslint-disable es/no-symbol -- required for testing */

var V8_VERSION$2 = engineV8Version;
var fails$2 = fails$7;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$2(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */

var NATIVE_SYMBOL$1 = nativeSymbol;

var useSymbolAsUid = NATIVE_SYMBOL$1
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var global$1 = global$c;
var shared = shared$3.exports;
var has = has$6;
var uid = uid$2;
var NATIVE_SYMBOL = nativeSymbol;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var WellKnownSymbolsStore = shared('wks');
var Symbol$1 = global$1.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

var wellKnownSymbol$3 = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};

var isObject$1 = isObject$7;
var isArray$1 = isArray$2;
var wellKnownSymbol$2 = wellKnownSymbol$3;

var SPECIES$1 = wellKnownSymbol$2('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate$1 = function (originalArray, length) {
  var C;
  if (isArray$1(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray$1(C.prototype))) C = undefined;
    else if (isObject$1(C)) {
      C = C[SPECIES$1];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

var fails$1 = fails$7;
var wellKnownSymbol$1 = wellKnownSymbol$3;
var V8_VERSION$1 = engineV8Version;

var SPECIES = wellKnownSymbol$1('species');

var arrayMethodHasSpeciesSupport$1 = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION$1 >= 51 || !fails$1(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var $$1 = _export;
var fails = fails$7;
var isArray = isArray$2;
var isObject = isObject$7;
var toObject = toObject$2;
var toLength = toLength$2;
var createProperty = createProperty$1;
var arraySpeciesCreate = arraySpeciesCreate$1;
var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$1;
var wellKnownSymbol = wellKnownSymbol$3;
var V8_VERSION = engineV8Version;

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$$1({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});

var Debuggable = /*#__PURE__*/function () {
  function Debuggable() {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, Debuggable);

    this.prefix = prefix;
    this.globalJsDebug = Debuggable.prototype.globalJsDebug;
  }

  _createClass(Debuggable, [{
    key: "debug",
    get: function get() {
      var _this$options;

      if (this.globalJsDebug || (this === null || this === void 0 ? void 0 : (_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.debug) === true) {
        if (this.prefix) {
          return {
            log: this._wrappedLog.bind(this),
            warn: this._wrappedWarn.bind(this),
            error: this._wrappedError.bind(this)
          };
        } else {
          return console;
        }
      } else {
        return {
          log: function log() {},
          warn: function warn() {},
          error: function error() {}
        };
      }
    }
  }, {
    key: "_wrappedLog",
    value: function _wrappedLog() {
      var _console;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_console = console).log.apply(_console, ["[".concat(this.prefix, "]")].concat(args));
    }
  }, {
    key: "_wrappedWarn",
    value: function _wrappedWarn() {
      var _console2;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      (_console2 = console).warn.apply(_console2, ["[".concat(this.prefix, "]")].concat(args));
    }
  }, {
    key: "_wrappedError",
    value: function _wrappedError() {
      var _console3;

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      (_console3 = console).error.apply(_console3, ["[".concat(this.prefix, "]")].concat(args));
    }
    /**
     * Toggle global JS debug output on or off.
     *
     * @param {boolean} toggle
     */

  }, {
    key: "setGlobalDebug",
    value: function setGlobalDebug(toggle) {
      Debuggable.prototype.globalJsDebug = toggle;
    }
  }]);

  return Debuggable;
}();
Debuggable.prototype.globalJsDebug = false;

var keyCodes = {
  48: '0',
  49: '1',
  50: '2',
  51: '3',
  52: '4',
  53: '5',
  54: '6',
  55: '7',
  56: '8',
  57: '9',
  59: ';',
  65: 'a',
  66: 'b',
  67: 'c',
  68: 'd',
  69: 'e',
  70: 'f',
  71: 'g',
  72: 'h',
  73: 'i',
  74: 'j',
  75: 'k',
  76: 'l',
  77: 'm',
  78: 'n',
  79: 'o',
  80: 'p',
  81: 'q',
  82: 'r',
  83: 's',
  84: 't',
  85: 'u',
  86: 'v',
  87: 'w',
  88: 'x',
  89: 'y',
  90: 'z',
  96: '0',
  97: '1',
  98: '2',
  99: '3',
  100: '4',
  101: '5',
  102: '6',
  103: '7',
  104: '8',
  105: '9'
};

var $ = function $() {
  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.document;
  return function () {
    if (typeof parent.querySelector !== 'undefined') {
      var _parent$querySelector;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_parent$querySelector = parent.querySelector).call.apply(_parent$querySelector, [parent].concat(args));
    }
  };
};
var $$ = function $$() {
  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.document;
  return function () {
    if (typeof parent.querySelectorAll !== 'undefined') {
      var _parent$querySelector2;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return (_parent$querySelector2 = parent.querySelectorAll).call.apply(_parent$querySelector2, [parent].concat(args));
    }
  };
};

var TOGGLE_CLASS_NAME = 'show-it';
/**
 * @param {object} el - element we're testing
 */

var itHasTarget = function itHasTarget(el) {
  // determine the target of el depending on `data-controls` or the
  // next sibling of el, if any
  var itHasControls = document.getElementById(el.dataset.controls);
  var itHasSibling = el.nextElementSibling;

  if (itHasControls) {
    // element controlled by el
    return itHasControls;
  } else if (itHasSibling) {
    // next sibling of el
    return itHasSibling;
  } else {
    // we don't know what to toggle
    throw new Error("It needs data-controls or a sibling to toggle: ".concat(el));
  }
};
/**
 * @param {object} el - element we're testing
 * @param {string} [toggleClass] - name of class to be toggled
 */


var isItOpen = function isItOpen(el) {
  var toggleClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TOGGLE_CLASS_NAME;
  // decide if el is open depending on `aria-expanded` or the
  // visibility of the target of el
  var itHasExpanded = el.getAttribute('aria-expanded');
  var itHasATarget = itHasTarget(el);

  if (itHasExpanded) {
    // is el expanded?
    return itHasExpanded === 'true';
  } else if (itHasATarget) {
    // is target visible?
    return itHasATarget.classList.contains(toggleClass);
  } else {
    // we don't know what to toggle
    throw new Error("It needs aria-expanded or a sibling to toggle: ".concat(el));
  }
};
/**
 * @param {object} el - element we're toggling
 * @param {string} [toggleClass] - name of class to be toggled
 */

var toggleIt = function toggleIt(el) {
  var toggleClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TOGGLE_CLASS_NAME;
  var expanded = isItOpen(el, toggleClass);
  var menu = itHasTarget(el);
  el.setAttribute('aria-expanded', !expanded);
  menu.classList.toggle(toggleClass);
};
/**
 * @param {object} el - element we're opening
 * @param {string} [toggleClass] - name of class to be toggled
 */

var openIt = function openIt(el) {
  var toggleClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TOGGLE_CLASS_NAME;
  el.setAttribute('aria-expanded', true);
  itHasTarget(el).classList.add(toggleClass);
};
/**
 * @param {object} el - element we're closing
 * @param {string} [toggleClass] - name of class to be toggled
 */

var closeIt = function closeIt(el) {
  var toggleClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TOGGLE_CLASS_NAME;
  el.setAttribute('aria-expanded', false);
  itHasTarget(el).classList.remove(toggleClass);
};

export { $, $$, Debuggable, closeIt, createDomElement, createSvgElement, isItOpen, keyCodes, openIt, toggleIt };
