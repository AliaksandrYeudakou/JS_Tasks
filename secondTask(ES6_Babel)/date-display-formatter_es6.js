/**
 * Task Date Display Formatter.
 * Develop an object for formatting dates (object in a set of functions).
 * The object should allow processing of input data in the form of strings or
 * as a number (ticks, ms). The object must support the ability to pass a regular
 * expression inside to parse the source string and build an output string.
 */
export default class DateDisplayFormatter {

    static getMonth(monthIndex) {
        let monthNames = new Map();

        monthNames
            .set('01', "January")
            .set('02', "February")
            .set('03', "March")
            .set('04', "April")
            .set('05', "May")
            .set('06', "June")
            .set('07', "July")
            .set('08', "August")
            .set('09', "September")
            .set('10', "October")
            .set('11', "November")
            .set('12', "December");

        return monthNames[parseInt(monthIndex)];
    }

    getDateInDigits(str) {
        return str.substring(0, 2) + "-" + str.substring(2, 4) + "-" + str.substring(4);
    }

    getDateWithNameOfMonth(str) {
        let monthIndex = str.substring(2, 4);

        return str.substring(0, 2) + " " + dateDisplayFormatter.getMeMonth(monthIndex) + " " + str.substring(4)
    }

    getDateWithInputReg(str, inputReg) {
        let yyyy = inputReg.substring(0, 4);
        let mm = inputReg.substring(4, 6);
        let dd = inputReg.substring(6);
        let resultDate;

        if (yyyy === "YYYY" && mm === "MM" && dd === "DD") {
            let monthIndex = str.substring(4, 6);

            resultDate = str.substring(6) + " " + dateDisplayFormatter.getMeMonth(monthIndex) + " " + str.substring(0, 4);
        }

        return resultDate;
    }

    getDateWithInputOutputReg(str, inputReg, outputReg) {
        let yyyyIn = inputReg.substring(0, 4);
        let mmIn = inputReg.substring(4, 6);
        let ddIn = inputReg.substring(6);

        let mmOut = outputReg.substring(0, 2);
        let ddOut = outputReg.substring(3, 5);
        let yyyyOut = outputReg.substring(6);
        let resultDate;

        if (yyyyIn === "YYYY" && mmIn === "MM" && ddIn === "DD") {
            if (mmOut === "MM" && ddOut === "DD" && yyyyOut === "YYYY") {
                resultDate = str.substring(4, 6) + "-" + str.substring(6) + "-" + str.substring(0, 4);
            }
        }

        return resultDate;
    }
}
