/**
 * Develop a comprehensive set of methods for executing the functions of the calculator
 * over the numbers passed in the string representation. Methods must allow work in both
 * integer and real format.
 */
export default class StringCalculator {

    constructor (a, b) {
        this.a = a;
        this.b = b;
    }

    addition () {
        return parseFloat(this.a) + parseFloat(this.b);
    }

    subtraction () {
        return parseFloat(this.a) - parseFloat(this.b);
    }

    multiplication() {
        return parseFloat(this.a) * parseFloat(this.b);
    }

    division() {
        return parseFloat(this.a) / parseFloat(this.b);
    }
}
