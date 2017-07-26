/**
 * Create an object that allows you to convert numbers from the binary system to
 * the decimal and back. Numbers are represented as vectors (number arrays,
 * where the index is a digit).
 */
export  default class BinaryConverter {

    constructor (array) {
        this.array = array;
    }

    static getNumberFromArray(arr) {
        let new_array = arr.reverse();
        let result = [];
        let correctArray = 0;

        for (let i = 0; i < new_array.length; i++) {
            result.push((new_array[i] * Math.pow(10, i)));
            correctArray += parseInt(result[i]);
        }

        return correctArray;
    }

    static getBinaryNumber(arr) {
        let digit = '';

        for (let i = 0; i < arr.length; i++) {
            digit += [arr[i], ''].join('');
        }

        return digit;
    }

    static fromDigitToBinary(number) {
        let res = [];

        while (number >= 1) {
            res.unshift(Math.floor(number % 2));
            number /= 2;
        }

        return res;
    }

    convertToBinary() {
        return BinaryConverter.getBinaryNumber(BinaryConverter.fromDigitToBinary(BinaryConverter.getNumberFromArray(this.array)));
    }

    convertToInteger() {
        let integerNumber = 0;

        for (let i = 0; i < this.array.reverse().length; i++) {
            integerNumber += this.array[i] * Math.pow(2, i);
        }

        return integerNumber;
    }
}
