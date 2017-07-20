/**
 * Tasks "Array Processing Tool".
 * Largest Sum Contiguous Subarray.
 * Search for the minimum, maximum, median values in the array.
 *  Search for an increasing sequence of maximum length in the original array.
 */

var arrayProcessingTool;
arrayProcessingTool = (function () {

    return {
        getMaxSubSum: function(arr) {
            var maxSum = 0,
                prevSum = 0;

            for (var r = 0; r < arr.length; ++r) {
                prevSum += arr[r];
                maxSum = Math.max(prevSum, maxSum);

                if (prevSum < 0) {
                    prevSum = 0;
                }
            }
            return maxSum;
        },

        searchMin: function(arr) {
            return  Math.min.apply(null, arr);
        },

        searchMax: function(arr) {
            return Math.max.apply(null, arr);
        },

        searchMedian: function(arr) {
            arr.sort(function (a, b) {
                return a -b;
            });

            var average = Math.floor(arr.length/2);

            if (arr.length % 2) {
                return arr[average];
            } else {
                return (arr[average - 1] + arr[average]) / 2.0;
            }
        },

        findLongestIncreasingSequence: function(arr) {
            var sequence = [],
                fork = null;

            sequence.push(arr[0]);

            arr.reduce(function (previousValue, currentItem, index) {
                if (currentItem > previousValue) {
                    sequence.push(currentItem);
                    return currentItem;
                }

                if (!fork && currentItem < previousValue) {
                    fork = findLongestIncreasingSequence(arr.slice(index));
                }
                return previousValue;
            });
            return fork && fork.length > sequence.length ? fork : sequence;
        }
    };
})();