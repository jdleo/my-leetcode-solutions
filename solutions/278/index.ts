function solution(
    isBadVersion: (n: number) => boolean
): (n: number) => number {
    return function (n: number): number {
        // left and right pointers for binary search
        let l: number = 1;
        let r: number = n;

        // go until pointers meet
        while (l <= r) {
            // calculate mid point
            const mid: number = Math.floor((l + r) / 2);

            // check if mid is a bad version
            if (isBadVersion(mid)) {
                // we have to search left
                r = mid - 1;
            } else {
                // we have to search rightt
                l = mid + 1;
            }
        }

        // result will be at left pointer
        return l;
    };
}
