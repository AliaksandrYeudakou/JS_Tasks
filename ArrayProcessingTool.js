/**
 * Tasks "Array Processing Tool".
 */
var ArrayProcessingTool;
ArrayProcessingTool = (function () {

    return {
        /**
         * Largest Sum Contiguous Subarray.
         */
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

        /**
         * Search for the minimum values in the array.
         */
        searchMin: function(arr) {
            return  Math.min.apply(null, arr);
        },

        /**
         * Search for the maximum values in the array.
         */
        searchMax: function(arr) {
            return Math.max.apply(null, arr);
        },

        /**
         * Search for the median values in the array.
         */
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

        /**
         * Search for an increasing sequence of maximum length in the original array.
         */
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