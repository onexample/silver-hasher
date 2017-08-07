/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isPrime_1 = __webpack_require__(2);
exports.isPrime = isPrime_1.isPrime;
var factorial_1 = __webpack_require__(4);
exports.factorial = factorial_1.factorial;
var fibonacci_1 = __webpack_require__(6);
exports.fib = fibonacci_1.fib;
var isSorted_1 = __webpack_require__(8);
exports.isSorted = isSorted_1.isSorted;
var filter_1 = __webpack_require__(10);
exports.filter = filter_1.filter;
var reduce_1 = __webpack_require__(12);
exports.reduce = reduce_1.reduce;
var reverse_1 = __webpack_require__(14);
exports.reverse = reverse_1.reverse;
var indexOf_1 = __webpack_require__(16);
exports.indexOf = indexOf_1.indexOf;
var isPalindrome_1 = __webpack_require__(18);
exports.isPalindrome = isPalindrome_1.isPalindrome;
var missing_1 = __webpack_require__(20);
exports.missing = missing_1.missing;
var isBalanced_1 = __webpack_require__(22);
exports.isBalanced = isBalanced_1.isBalanced;
var debounce_1 = __webpack_require__(24);
exports.debounce = debounce_1.debounce;
var uniq_1 = __webpack_require__(26);
exports.uniq = uniq_1.uniq;
var intersection_1 = __webpack_require__(28);
exports.intersection = intersection_1.intersection;
var permute_1 = __webpack_require__(30);
exports.permute = permute_1.permute;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(0));
__export(__webpack_require__(32));
__export(__webpack_require__(35));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(3));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isPrime = (n) => {
    if (n === 0 || n === 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0)
            return false;
        return n !== 1;
    }
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(5));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.factorial = (n) => {
    return n === 0 ? 1 : n * exports.factorial(n - 1);
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(7));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fib = (n) => {
    if (n === 0) {
        return n;
    }
    let a = 1, b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(9));


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isSorted = (arr) => {
    const d = Number(arr[0] < arr[1]);
    return arr.every((e, i, a) => i === 0 || !(Number((a[i] > a[i - 1])) ^ d));
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(11));


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = (arr, fn) => {
    let i = -1, ri = 0, res = [];
    const len = !arr ? 0 : arr.length;
    while (++i < len) {
        let val = arr[i];
        if (fn(val, i, arr)) {
            res[ri++] = val;
        }
    }
    return res;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(13));


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function reduce(arr, iter, acc) {
    let i = -1;
    const len = !arr ? 0 : arr.length;
    const initAcc = arguments.length < 3;
    if (len && initAcc) {
        acc = arr[++i];
    }
    while (++i < len) {
        acc = iter(acc, arr[i], i, arr);
    }
    return acc;
}
exports.reduce = reduce;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(15));


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.reverse = (str) => {
    let result = '';
    let len = str.length;
    while (len > 0) {
        result += str.substring(len - 1, len);
        len--;
    }
    /**
     * Also here is another cheating way like this
     *
     * return str.split('').reverse().join('')
     *
     */
    return result;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(17));


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexOf = (arr, value) => {
    const len = !arr ? 0 : arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(19));


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = (str) => {
    //make string lower case and remove spaces
    let tmp = str.replace(/[^A-Z0-9]/ig, '').toLowerCase();
    //reverse the clear lower case string
    let checkPalindrome = tmp.split('').reverse().join('');
    return tmp === checkPalindrome;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(21));


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Missed numbers from sequence;
 *
 *
 *
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
exports.missing = (arr) => {
    let mia = [], min = Math.min.apply(null, arr), max = Math.max.apply(null, arr);
    while (min < max) {
        if (arr.indexOf(++min) == -1) {
            mia.push(min);
        }
    }
    return mia;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(23));


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isBalanced = (str) => {
    let stack = [];
    const opening = new RegExp(/\{|\[|\(|\</);
    const closing = new RegExp(/\}|\]|\)|\>/);
    const len = str.length;
    for (let i = 0; i < len; i++) {
        if (opening.test(str[i])) {
            stack.push(str[i]);
        }
        if (closing.test(str[i]) && !stack.pop()) {
            return false;
        }
    }
    return !stack.length;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(25));


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function debounce(fn, delay, immediate) {
    //Shared timeout between each closure call;
    let timerId;
    return function () {
        const context = this, args = arguments;
        const later = () => {
            timerId = null;
            if (!immediate) {
                fn.apply(context, args);
            }
        };
        clearTimeout(timerId);
        timerId = setTimeout(later, delay);
        if (immediate && !timerId) {
            fn.apply(context, args);
        }
    };
}
exports.debounce = debounce;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(27));


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.uniq = (arr) => [...new Set(arr)];


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(29));


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 *
 * Return an array that contains those elements of arr1 that are also in arr2.
 *
 * Example:
 *
 *      let a1 = [1, 2, 4];
 *      let a2 = [1, 3, 4, 5];
 *      let res = intersection(a1, a2) // [1, 4]
 *
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>}
 */

Object.defineProperty(exports, "__esModule", { value: true });
exports.intersection = (arr1, arr2) => {
    const s = new Set(arr2);
    return arr1.filter(x => s.has(x));
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(31));


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.permute = (str) => {
    if (str.length === 0) {
        return [];
    }
    if (str.length === 1) {
        return [str];
    }
    let permutations = [];
    str.split('').forEach((char, index) => {
        let remainingString = str.slice(0, index) + str.slice(index + 1, str.length);
        for (let subPermutation of exports.permute(remainingString)) {
            permutations.push(char + subPermutation);
        }
    });
    return permutations;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(33));


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(34));


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const func_1 = __webpack_require__(0);
/**
 * Decorator for Class methods, used debounce()
 *
 * Example:
 *
 *      class ExampleApp {
 *
 *          constructor () {
 *              document.addEventListener('mousemove', this.example)
 *          }
 *
 *          @Debounced(500)
 *          public example() {
 *              console.log('hello')
 *          }
 *      }
 *
 *
 * @param {number} delay
 * @returns {(target, propertyKey: string, descriptor: PropertyDescriptor) => {configurable: boolean; enumerable: boolean; get: (() => any)}}
 * @constructor

 *
 */
function Debounced(delay) {
    return function (target, propertyKey, descriptor) {
        return {
            configurable: descriptor.configurable,
            enumerable: descriptor.enumerable,
            get: function () {
                Object.defineProperty(this, propertyKey, {
                    configurable: descriptor.configurable,
                    enumerable: descriptor.enumerable,
                    value: func_1.debounce(descriptor.value, delay)
                });
                return this[propertyKey];
            }
        };
    };
}
exports.Debounced = Debounced;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(36));


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(37));


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = __webpack_require__(38);
/**
 * A linear collection of data elements
 *
 */
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    add(data) {
        const nodeToAdd = new Node_1.Node(data);
        if (this.head === null) {
            this.head = nodeToAdd;
        }
        else {
            let nodeToCheck = this.head;
            while (nodeToCheck.next) {
                nodeToCheck = nodeToCheck.next;
            }
            nodeToCheck.next = nodeToAdd;
        }
        this.length++;
    }
    size() {
        return this.length;
    }
    remove(position) {
        let currentNode = this.head, length = this.length, count = 0, message = 'Failure: non-existent node in this list.', beforeNodeToDelete = null, nodeToDelete = null, deletedNode = null;
        // in case of invalid position passed
        if (position < 0 || position > length) {
            throw new Error(message);
        }
        // in case when first node removed
        if (position === 1) {
            this.head = currentNode.next;
            deletedNode = currentNode;
            currentNode = null;
            this.length--;
            return deletedNode;
        }
        // in case when any other node is removed
        while (count < position) {
            beforeNodeToDelete = currentNode;
            nodeToDelete = currentNode.next;
            count++;
        }
        beforeNodeToDelete.next = nodeToDelete.next;
        deletedNode = nodeToDelete;
        nodeToDelete = null;
        this.length--;
        return deletedNode;
    }
}
exports.LinkedList = LinkedList;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
exports.Node = Node;


/***/ })
/******/ ]);