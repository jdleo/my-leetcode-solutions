class MedianFinder {
    private arr: number[];
    constructor() {
        // set up array
        this.arr = [];
    }

    /**
     * @param {number} num
     * @return {void}
     */
    addNum(num: number): void {
        // check if array is size 0, just push
        if (this.arr.length === 0) {
            this.arr.push(num);
            return;
        }

        // left and right pointers for binary search
        let l: number = 0;
        let r: number = this.arr.length;

        // keep going until pointers meet
        while (l < r) {
            // get mid point
            const mid: number = Math.floor((l + r) / 2);

            // check if we can insert at mid
            if (num > this.arr[mid]) {
                // search right half of array
                l = mid + 1;
            } else {
                // search left half of array
                r = mid;
            }
        }
        // we can insert at left pointer
        this.arr.splice(l, 0, num);
    }

    /**
     * @return {number}
     */
    findMedian(): number {
        // if odd, return middle, if even, return avg of two middle
        const mid: number = Math.floor(this.arr.length / 2);
        return (this.arr.length & 1) === 1
            ? this.arr[mid]
            : (this.arr[mid] + this.arr[mid - 1]) / 2;
    }
}
