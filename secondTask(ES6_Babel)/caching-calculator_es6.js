/**
 * Write a functional allowing to perform operations on two
 * Numbers and caching the result of the operation so that when the functional is called again with the same parameters,
 * Cached value and did not recalculate the result.
 */
export default class CachingCalculator {

    static memoizes (func) {
        let cached = {};

        return (...args) => {
            // let args = Array.prototype.slice.call(arguments);

            if (cached[args]) {
                console.log('returning cached');
                return cached[args];
            } else {
                cached[args] = func.apply(this, args);

                return cached[args];
            }
        };
    };

    static calculate (a, b, operator) {

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
