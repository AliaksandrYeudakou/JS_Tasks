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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _arrayProcessingTool_es = __webpack_require__(1);

var _arrayProcessingTool_es2 = _interopRequireDefault(_arrayProcessingTool_es);

var _binaryConverter_es = __webpack_require__(2);

var _binaryConverter_es2 = _interopRequireDefault(_binaryConverter_es);

var _stringCalculator_es = __webpack_require__(3);

var _stringCalculator_es2 = _interopRequireDefault(_stringCalculator_es);

var _dateDisplayFormatter_es = __webpack_require__(4);

var _dateDisplayFormatter_es2 = _interopRequireDefault(_dateDisplayFormatter_es);

var _cachingCalculator_es = __webpack_require__(5);

var _cachingCalculator_es2 = _interopRequireDefault(_cachingCalculator_es);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    window.arrayProcessingTool = _arrayProcessingTool_es2.default;
    window.binaryConverter = _binaryConverter_es2.default;
    window.stringCalculator = _stringCalculator_es2.default;
    window.dateDisplayFormatter = _dateDisplayFormatter_es2.default;
    window.cachingCalculator = _cachingCalculator_es2.default;
})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Tasks Array Processing Tool.
 * Largest Sum Contiguous Subarray.
 * Search for the minimum, maximum, median values in the array.
 *  Search for an increasing sequence of maximum length in the original array.
 */
var ArrayProcessingTool = function () {
    function ArrayProcessingTool(array) {
        _classCallCheck(this, ArrayProcessingTool);

        this.array = array;
    }

    _createClass(ArrayProcessingTool, [{
        key: "getMaxElement",
        value: function getMaxElement() {
            return Math.max.apply(Math, _toConsumableArray(this.array));
        }
    }, {
        key: "getMinElement",
        value: function getMinElement() {
            return Math.min.apply(Math, _toConsumableArray(this.array));
        }
    }, {
        key: "getMaxSubarraySum",
        value: function getMaxSubarraySum() {
            var maxSum = 0;
            var previousMaxSum = 0;

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var value = _step.value;

                    previousMaxSum += value;
                    maxSum = Math.max(previousMaxSum, maxSum);

                    if (previousMaxSum < 0) {
                        previousMaxSum = 0;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return maxSum;
        }
    }, {
        key: "getMedianValue",
        value: function getMedianValue() {
            this.array.sort(function (a, b) {
                return a - b;
            });

            var average = Math.floor(this.array.length / 2);

            if (this.array % 2) {
                return average;
            } else {
                return (this.array[average - 1] + this.array[average]) / 2;
            }
        }
    }, {
        key: "getLongestIncreasingSequence",
        value: function getLongestIncreasingSequence() {
            var sequence = [];
            var fork = [];

            sequence.push(this.array[0]);

            for (var i = 1; i < this.array.length + 1; i++) {
                if (this.array[i] > this.array[i - 1]) {
                    sequence.push(this.array[i]);
                } else {
                    if (fork.length < sequence.length) {
                        fork = sequence;
                    }

                    sequence = [];
                    sequence.push(this.array[i]);
                }
            }
            return fork;
        }
    }]);

    return ArrayProcessingTool;
}();

exports.default = ArrayProcessingTool;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Create an object that allows you to convert numbers from the binary system to
 * the decimal and back. Numbers are represented as vectors (number arrays,
 * where the index is a digit).
 */
var BinaryConverter = function () {
    function BinaryConverter(array) {
        _classCallCheck(this, BinaryConverter);

        this.array = array;
    }

    _createClass(BinaryConverter, [{
        key: 'convertToBinary',
        value: function convertToBinary() {
            return BinaryConverter.getBinaryNumber(BinaryConverter.fromDigitToBinary(BinaryConverter.getNumberFromArray(this.array)));
        }
    }, {
        key: 'convertToInteger',
        value: function convertToInteger() {
            var integerNumber = 0;

            for (var i = 0; i < this.array.reverse().length; i++) {
                integerNumber += this.array[i] * Math.pow(2, i);
            }

            return integerNumber;
        }
    }], [{
        key: 'getNumberFromArray',
        value: function getNumberFromArray(arr) {
            var new_array = arr.reverse();
            var result = [];
            var correctArray = 0;

            for (var i = 0; i < new_array.length; i++) {
                result.push(new_array[i] * Math.pow(10, i));
                correctArray += parseInt(result[i]);
            }

            return correctArray;
        }
    }, {
        key: 'getBinaryNumber',
        value: function getBinaryNumber(arr) {
            var digit = '';

            for (var i = 0; i < arr.length; i++) {
                digit += [arr[i], ''].join('');
            }

            return digit;
        }
    }, {
        key: 'fromDigitToBinary',
        value: function fromDigitToBinary(number) {
            var res = [];

            while (number >= 1) {
                res.unshift(Math.floor(number % 2));
                number /= 2;
            }

            return res;
        }
    }]);

    return BinaryConverter;
}();

exports.default = BinaryConverter;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Develop a comprehensive set of methods for executing the functions of the calculator
 * over the numbers passed in the string representation. Methods must allow work in both
 * integer and real format.
 */
var StringCalculator = function () {
    function StringCalculator(a, b) {
        _classCallCheck(this, StringCalculator);

        this.a = a;
        this.b = b;
    }

    _createClass(StringCalculator, [{
        key: "addition",
        value: function addition() {
            return parseFloat(this.a) + parseFloat(this.b);
        }
    }, {
        key: "subtraction",
        value: function subtraction() {
            return parseFloat(this.a) - parseFloat(this.b);
        }
    }, {
        key: "multiplication",
        value: function multiplication() {
            return parseFloat(this.a) * parseFloat(this.b);
        }
    }, {
        key: "division",
        value: function division() {
            return parseFloat(this.a) / parseFloat(this.b);
        }
    }]);

    return StringCalculator;
}();

exports.default = StringCalculator;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Task Date Display Formatter.
 * Develop an object for formatting dates (object in a set of functions).
 * The object should allow processing of input data in the form of strings or
 * as a number (ticks, ms). The object must support the ability to pass a regular
 * expression inside to parse the source string and build an output string.
 */
var DateDisplayFormatter = function () {
    function DateDisplayFormatter() {
        _classCallCheck(this, DateDisplayFormatter);
    }

    _createClass(DateDisplayFormatter, [{
        key: 'getDateInDigits',
        value: function getDateInDigits(str) {
            return str.substring(0, 2) + "-" + str.substring(2, 4) + "-" + str.substring(4);
        }
    }, {
        key: 'getDateWithNameOfMonth',
        value: function getDateWithNameOfMonth(str) {
            var monthIndex = str.substring(2, 4);

            return str.substring(0, 2) + " " + dateDisplayFormatter.getMeMonth(monthIndex) + " " + str.substring(4);
        }
    }, {
        key: 'getDateWithInputReg',
        value: function getDateWithInputReg(str, inputReg) {
            var yyyy = inputReg.substring(0, 4);
            var mm = inputReg.substring(4, 6);
            var dd = inputReg.substring(6);
            var resultDate = void 0;

            if (yyyy === "YYYY" && mm === "MM" && dd === "DD") {
                var monthIndex = str.substring(4, 6);

                resultDate = str.substring(6) + " " + dateDisplayFormatter.getMeMonth(monthIndex) + " " + str.substring(0, 4);
            }

            return resultDate;
        }
    }, {
        key: 'getDateWithInputOutputReg',
        value: function getDateWithInputOutputReg(str, inputReg, outputReg) {
            var yyyyIn = inputReg.substring(0, 4);
            var mmIn = inputReg.substring(4, 6);
            var ddIn = inputReg.substring(6);

            var mmOut = outputReg.substring(0, 2);
            var ddOut = outputReg.substring(3, 5);
            var yyyyOut = outputReg.substring(6);
            var resultDate = void 0;

            if (yyyyIn === "YYYY" && mmIn === "MM" && ddIn === "DD") {
                if (mmOut === "MM" && ddOut === "DD" && yyyyOut === "YYYY") {
                    resultDate = str.substring(4, 6) + "-" + str.substring(6) + "-" + str.substring(0, 4);
                }
            }

            return resultDate;
        }
    }], [{
        key: 'getMonth',
        value: function getMonth(monthIndex) {
            var monthNames = new Map();

            monthNames.set('01', "January").set('02', "February").set('03', "March").set('04', "April").set('05', "May").set('06', "June").set('07', "July").set('08', "August").set('09', "September").set('10', "October").set('11', "November").set('12', "December");

            return monthNames[parseInt(monthIndex)];
        }
    }]);

    return DateDisplayFormatter;
}();

exports.default = DateDisplayFormatter;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Write a functional allowing to perform operations on two
 * Numbers and caching the result of the operation so that when the functional is called again with the same parameters,
 * Cached value and did not recalculate the result.
 */
var CachingCalculator = function () {
    function CachingCalculator() {
        _classCallCheck(this, CachingCalculator);
    }

    _createClass(CachingCalculator, [{
        key: 'memoizes',
        value: function memoizes(func) {
            var _arguments = arguments,
                _this = this;

            var cached = {};

            return function () {
                var args = Array.prototype.slice.call(_arguments);

                if (cached[args]) {
                    console.log('returning cached');
                    return cached[args];
                } else {
                    cached[args] = func.apply(_this, args);

                    return cached[args];
                }
            };
        }
    }, {
        key: 'calculate',
        value: function calculate(a, b, operator) {

            switch (operator) {
                case '+':
                    return a + b;
                    break;
                case '-':
                    return a - b;
                    break;
                case '/':
                    return a / b;
                    break;
                case '*':
                    return a * b;
                    break;
                default:
                    console.log('Strange operator, very strange');
            }
        }
    }]);

    return CachingCalculator;
}();

exports.default = CachingCalculator;

/***/ })
/******/ ]);