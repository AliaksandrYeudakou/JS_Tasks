/**
 * Write the function of the input text handler. The function must accept a string,
 * the maximum line size (optional), the maximum number of rows (optional), the type of
 * formatting ("word wrap", "carry by character", "carry by sentence",
 * "no hyphenation" - optional).
 */
var textFormatter;
textFormatter = function() {

    function testSpace(symbol) {
        var space = new RegExp(/^\s$/);

        return space.test(symbol.charAt(0));
    }

    function testDot(symbol) {
        var dot = new RegExp(/\./);

        return dot.test(symbol.charAt(0));
    }
    
    function sentenceWrap(str, max_string_size) {

        var newLine = '\n',
            resultLine = '',
            done = false;

        do {
            var found = false;

            for (var i = max_string_size - 1; i >= 0; i--) {
                if (testDot(str.charAt(i))) {
                    resultLine += [str.slice(0, i), newLine].join('');
                    str = str.slice(i + 1);
                    found = true;
                    break;
                }
            }

            if (!found) {
                for (var k = 0; k < str.length; k++) {
                    if (testDot(str.charAt(k))) {
                        resultLine += [str.slice(0 , k), newLine].join('');
                        str = str.slice(k + 1);
                        break;
                    }
                }
            }

            if (str.length < max_string_size)
                done = true;
        } while (!done);

        return resultLine;
    }

    function characterWrap(str, max_string_size) {

        var newLine = "\n",
            done = false,
            resultLine = '';

        do {
            var found = false;

            for (var i = max_string_size - 1; i >= 0; i--) {
                if (testSpace(str.charAt(i))) {
                    resultLine += [str.slice(0, i), newLine].join('');
                    str = str.slice(i + 1);
                    found = true;
                    break;
                }
            }

            if (!found) {
                resultLine += [str.slice(0, max_string_size), newLine].join('');
                str = str.slice(max_string_size);
            }

            if (str.length < max_string_size)
                done = true;
        } while (!done);

        return resultLine + str;
    }

    function wordWrap(str, max_string_size) {

        var resultLine = '',
            newLine = "\n",
            done = false;

        do {

            var found = false;
            for (var i = max_string_size - 1; i >= 0; i--) {
                if (testSpace(str.charAt(i))) {
                    resultLine = resultLine + [str.slice(0, i), newLine].join('');
                    str = str.slice(i + 1);
                    found = true;
                    break;
                }
            }

            if (!found) {
                for (var k = 0; k < str.length; k++) {
                    if (testSpace(str.charAt(k))) {
                        resultLine += [str.slice(0, k), newLine].join('');
                        str = str.slice(k + 1);
                        break;
                    }
                }
            }

            if (str.length < max_string_size)
                done = true;
        } while (!done);

        return resultLine + str;
    }

    return {
        formatter: function(str, bozo, max_string_size, max_number_of_strings) {
            max_string_size = typeof max_string_size !== 'undefined' ? max_string_size : 10;
            max_number_of_strings = typeof max_number_of_strings !== 'undefined' ? max_number_of_strings : 5;

            if ( str.match(/\./g).length > max_number_of_strings) {
                throw "The number of lines exceeded";
            }

            if (!bozo) {
                return str;
            }

            switch (bozo) {
                case 1:
                    return characterWrap(str, max_string_size);
                    break;
                case 2:
                    return wordWrap(str, max_string_size);
                    break;
                case 3:
                    return sentenceWrap(str, max_string_size);
                    break;
                default:
                    console.log("Choose 1 for carry by character, choose 2 for word wrap and choose 3 for carry by sentence");
            }
        }
    }
}();

console.log(textFormatter.formatter('Lorem. Ipsum. is simply dummy text of the printing and typesetting industry.', 3));