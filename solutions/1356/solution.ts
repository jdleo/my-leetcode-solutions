function sortByBits(arr: number[]): number[] {
    // helper function to count set-bits in a number
    function bits(n: number): number {
        let b = 0;
        while (n > 0) {
            b += n & 1;
            n >>= 1;
        }
        return b;
    }

    // sort array, ascending based on set bits
    arr.sort((a, b) => {
        const a_ = bits(a);
        const b_ = bits(b);
        if (a_ !== b_) {
            return a_ - b_;
        } else {
            // sort ascending, regular, since bits are same
            return a - b;
        }
    });
    return arr;
}
