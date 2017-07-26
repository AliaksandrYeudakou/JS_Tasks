/**
 * Write a functional allowing to perform operations on two
 * Numbers and caching the result of the operation so that when the functional is called again with the same parameters,
 * Cached value and did not recalculate the result.
 */
var cachingCalculator = function () {

    memoizes = function (func) {
        var cached = {};

        return function () {
            var args = Array.prototype.slice.call(arguments);

            if (cached[args]) {
                console.log('returning cached');
                return cached[args];
            } else {
                cached[args] = func.apply(this, args);

                return cached[args];
            }
        };
    };

    return {

        calculate: function (a, b, operator) {

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

    }
}();

var memo = memoizes(cachingCalculator.calculate);

console.log(memo(1, 2, '-'));
console.log(memo(3, 2, '-'));
console.log(memo(1, 1 + 1, '-'));