/**
 * Develop a comprehensive set of methods for executing the functions of the calculator
 * over the numbers passed in the string representation. Methods must allow work in both
 * integer and real format.
 */
var stringCalculator = function () {

    return {
        addition: function (a, b) {
            var param_1 = parseFloat(a),
                param_2 = parseFloat(b);
            return param_1 + param_2;
        },

        subtraction: function (a, b) {
            var param_1 = parseFloat(a),
                param_2 = parseFloat(b);
            return param_1 - param_2;
        },

        multiplication: function (a, b) {
            var param_1 = parseFloat(a),
                param_2 = parseFloat(b);
            return param_1 * param_2;
        },

        division: function (a, b) {
            var param_1 = parseFloat(a),
                param_2 = parseFloat(b);
            return param_1 / param_2;
        }
    };
}();
