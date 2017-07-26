/**
 * The developer of the object is a sorter that allows sorting integer arrays
 * in at least 4 ways.
 */
export default class ArraySorter {

    constructor (array) {
        this.array = array;
    }

    bubbleSort () {
        for (let i = 0; i < this.array.length; i++) {
            for (let j = 0; j < this.array.length - i - 1; j++) {
                if (this.array[j] > this.array[j + 1]) {
                    let temp = this.array[j];
                    this.array[j] = this.array[j + 1];
                    this.array[j + 1] = temp;
                }
            }
        }

        return this.array;
    }

    static merge (left, right) {
        let array_result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] > right[rightIndex]) {
                array_result.push(right[rightIndex]);
                rightIndex++;
            } else {
                array_result.push(left[leftIndex]);
                leftIndex++;
            }
        }

        while (leftIndex < left.length) {
            array_result.push(left[leftIndex]);
            leftIndex++;
        }

        while (rightIndex < right.length) {
            array_result.push(right[rightIndex]);
            rightIndex++;
        }

        return array_result;
    }

    static mergeSort (array) {
        if (array.length === 1) {
            return array;
        }

        let mid = parseInt(array.length / 2),
            left = array.slice(0, mid),
            right = array.slice(mid);

        return ArraySorter.merge(ArraySorter.mergeSort(left), ArraySorter.mergeSort(right));
    }

    static insertionSort (array) {
        for (let i = 0; i < array.length; i++) {
            let temp = array[i];
            let j;

            for (j = i - 1; j >= 0 && array[j] > temp; j--) {
                array[j + 1] = array[j];
            }

            array[j + 1] = temp;
        }

        return array;
    }

    static bucketSort (array, bucketSize = 10) {
        if (array.length === 0) {
            return array;
        }

        let minValue = array[0];
        let maxValue = array[0];

        for (let i = 1; i < array.length; i++) {
            if (array[i] < minValue) {
                minValue = array[i];
            } else if (array[i] > maxValue) {
                maxValue = array[i];
            }
        }

        let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1,
            buckets = new Array(bucketCount);
        for (let i = 0; i < buckets.length; i++) {
            buckets[i] = [];
        }

        for (let i = 0; i < array.length; i++) {
            buckets[Math.floor((array[i] - minValue) / bucketSize)].push(array[i]);
        }

        array.length = 0;
        for (let i = 0; i < buckets.length; i++) {
            arraySorter.insertionSort(buckets[i]);
            for (let j = 0; j < buckets[i].length; j++) {
                array.push(buckets[i][j]);
            }
        }

        return array;
    }

    static swap (array, leftIndex, rightIndex) {
        let temp = array[leftIndex];
        array[leftIndex] = array[rightIndex];
        array[rightIndex] = temp;
    }

    static partition (array, left, right) {
        let index = Math.floor((right + left) / 2);
        let pivot = array[index];
        let i = left;
        let j = right;

        while (i < j) {

            while (array[i] < pivot) {
                i++;
            }

            while (array[j] > pivot) {
                j--;
            }

            if (i < j) {
                ArraySorter.swap(array, i, j);
                if (i === index) {
                    index = j;
                } else if (j === index) {
                    index = i;
                }

                i++;
                j--;
            }
        }

        return i;
    }

    static quickSort (array, left, right) {
        let index;

        if (array.length > 1) {

            left = typeof left !== "number" ? 0 : left;
            right = typeof right !== "number" ? array.length - 1 : right;

            index = ArraySorter.partition(array, left, right);

            if (left < index - 1) {
                ArraySorter.quickSort(array, left, index - 1);
            }

            if (index + 1 < right) {
                ArraySorter.quickSort(array, index + 1, right);
            }

        }

        return array;
    }
}