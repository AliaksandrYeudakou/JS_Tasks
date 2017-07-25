/**
 * Tasks Array Processing Tool.
 * Largest Sum Contiguous Subarray.
 * Search for the minimum, maximum, median values in the array.
 *  Search for an increasing sequence of maximum length in the original array.
 */
export default class ArrayProcessingTool {

    constructor (array) {
        this.array = array;
    }

    getMaxElement() {
        return Math.max(...this.array);
    }

    getMinElement() {
        return Math.min(...this.array);
    }

    getMaxSubarraySum() {
        let maxSum = 0;
        let previousMaxSum = 0;

        for (let value of this.array) {
            previousMaxSum += value;
            maxSum = Math.max(previousMaxSum, maxSum);

            if (previousMaxSum < 0) {
                previousMaxSum = 0;
            }
        }

        return maxSum;
    }

    getMedianValue() {
        this.array.sort((a, b) =>  a - b );

        let average = Math.floor(this.array.length / 2);

        if (this.array % 2) {
            return average ;
        } else {
            return (this.array[average - 1] + this.array[average]) / 2;
        }
    }

    getLongestIncreasingSequence() {
        let sequence = [];
        let fork = [];

        sequence.push(this.array[0]);

        for (let i = 1; i < this.array.length + 1; i++) {
            if (this.array[i] > this.array[i - 1]) {
                sequence.push(this.array[i]);
            } else {
                if (fork.length < sequence.length) {
                    fork = sequence;
                }

                sequence = [];
                sequence.push(this.array[i]);
            }
        }
        return fork;
    }
}