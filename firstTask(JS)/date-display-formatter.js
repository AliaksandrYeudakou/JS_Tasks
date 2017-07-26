/**
 * Task Date Display Formatter.
 * Develop an object for formatting dates (object in a set of functions).
 * The object should allow processing of input data in the form of strings or
 * as a number (ticks, ms). The object must support the ability to pass a regular
 * expression inside to parse the source string and build an output string.
 */
var dateDisplayFormatter = function () {

    return {
        getMeMonth: function (monthIndex) {
            var monthNames = {
                01: "January", 02: "February",
                03: "March", 04: "April", 05: "May",
                06: "June", 07: "July", 08: "August",
                09: "September", 10: "October", 11: "November",
                12: "December"
            };

            return monthNames[parseInt(monthIndex)];
        },

        // 31012011" => 21-10-2011
        getDateInDigits: function (str) {
            return str.substring(0, 2) + "-" + str.substring(2, 4) + "-" + str.substring(4);
        },

        // "31012011" => 21 October 2011
        getDateWithNameOfMonth: function (str) {
            var monthIndex = str.substring(2, 4);

            return str.substring(0, 2) + " " + dateDisplayFormatter.getMeMonth(monthIndex) + " " + str.substring(4)
        },

        // ("20130431", "YYYYMMDD") => 31 April 2013
        getDateWithInputReg: function (str, inputReg) {
            var yyyy = inputReg.substring(0, 4),
                mm = inputReg.substring(4, 6),
                dd = inputReg.substring(6);

            if (yyyy === "YYYY" && mm === "MM" && dd === "DD") {
                var monthIndex = str.substring(4, 6);

                var resultDate = str.substring(6) + " " + dateDisplayFormatter.getMeMonth(monthIndex) + " " + str.substring(0, 4);
            }

            return resultDate;
        },

        // ("20130431", "YYYYMMDD", "MM-DD-YYYY") => 04-31-2013
        getDateWithInputOutputReg: function (str, inputReg, outputReg) {
            var yyyyIn = inputReg.substring(0, 4),
                mmIn = inputReg.substring(4, 6),
                ddIn = inputReg.substring(6);

            var mmOut = outputReg.substring(0, 2),
                ddOut = outputReg.substring(3, 5),
                yyyyOut = outputReg.substring(6);

            if (yyyyIn === "YYYY" && mmIn === "MM" && ddIn === "DD") {
                if (mmOut === "MM" && ddOut === "DD" && yyyyOut === "YYYY") {
                    var resultDate = str.substring(4, 6) + "-" + str.substring(6) + "-" + str.substring(0, 4);
                }
            }

            return resultDate;
        },

        // ("20130431", "YYYYMMDD") => 31 April 2013
        getDatetimeDif: function (str, inputReg) {
            var yyyy = inputReg.substring(0, 4),
                mm = inputReg.substring(4, 6),
                dd = inputReg.substring(6);

            if (yyyy === "YYYY" && mm === "MM" && dd === "DD") {
                var monthIndex = str.substring(4, 6);

                var resultDate = str.substring(6) + " " + dateDisplayFormatter.getMeMonth(monthIndex) + " " + str.substring(0, 4);
            }

            return {
                fromNow: function () {
                    console.log('1');
                }
            };
        }
    }

}();

console.log(dateDisplayFormatter.getDateInDigits("31102011"));
console.log(dateDisplayFormatter.getDateWithNameOfMonth("31012011"));
console.log(dateDisplayFormatter.getDateWithInputReg("20130431", "YYYYMMDD"));
console.log(dateDisplayFormatter.getDateWithInputOutputReg("20130431", "YYYYMMDD", "MM-DD-YYYY"));

dateDisplayFormatter.getDatetimeDif("20130431", "YYYYMMDD").fromNow();