/**
 * Create an object that allows you to convert numbers from the binary system to
 * the decimal and back. Numbers are represented as vectors (number arrays,
 * where the index is a digit).
 */
var binaryConverter;
binaryConverter = function() {

    function numberToBinary(number) {
        var res = [];

        while (number >= 1) {
            res.unshift(Math.floor( number % 2) );
            number = number / 2;
        }

        return res;
    }

    function getBinaryNumber(array) {
        var digit = '';

        for (var i = 0; i < array.length; i++) {
            digit += [array[i], ''].join('');
        }
        return digit;
    }

    function getNumberFromArray(array) {
        var new_array = array.reverse(),
            result = [],
            correctNumber = 0;

        for (var i = 0; i < new_array.length; i++) {
            result.push((new_array[i] * Math.pow(10, i)));
            correctNumber += parseInt(result[i]);
        }
        return correctNumber;
    }

    return {

        convertToBinary: function(array) {
            var correctIntegerNumber = getNumberFromArray(array);

            return getBinaryNumber(numberToBinary(correctIntegerNumber));
        },

        convertToInteger: function(array) {
            var integerNumber = 0;

            for (var i = 0; i < array.length; i++) {
                integerNumber += array[i] * Math.pow(2, i);
            }

            return integerNumber;
        }
    }
}();

console.log(binaryConverter.convertToBinary([3]));
console.log(binaryConverter.convertToInteger([1, 0, 1]));