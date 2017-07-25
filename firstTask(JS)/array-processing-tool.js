/**
 * Tasks Array Processing Tool.
 * Largest Sum Contiguous Subarray.
 * Search for the minimum, maximum, median values in the array.
 *  Search for an increasing sequence of maximum length in the original array.
 */
var arrayProcessingTool = (function () {

    return {

        getMaxSubarraySum: function (arr) {
            var maxSum = 0;
            var previousMaxSum = 0;

            var r;
            for (r = 0; r < arr.length; ++r) {
                previousMaxSum += arr[r];
                maxSum = Math.max(previousMaxSum, maxSum);

                if (previousMaxSum < 0) {
                    previousMaxSum = 0;
                }
            }

            return maxSum;
        },

        getMinElement: function (arr) {
            return Math.min.apply(null, arr);
        },

        getMaxElement: function (arr) {
            return Math.max.apply(null, arr);
        },

        getMedianValue: function (arr) {
            arr.sort(function (a, b) {
                return a - b;
            });

            var average = Math.floor(arr.length / 2);

            if (arr.length % 2) {
                return arr[average];
            } else {
                return (arr[average - 1] + arr[average]) / 2.0;
            }
        },

        getLongestIncreasingSequence: function (arr) {
            var sequence = [];
            var fork = null;

            sequence.push(arr[0]);

            arr.reduce(function (previousValue, currentItem, index) {
                if (currentItem > previousValue) {
                    sequence.push(currentItem);
                    return currentItem;
                }

                if (!fork && currentItem < previousValue) {
                    fork = arrayProcessingTool.getLongestIncreasingSequence(arr.slice(index));
                }

                return previousValue;
            });

            return fork && fork.length > sequence.length ? fork : sequence;
        }
    };
}());
