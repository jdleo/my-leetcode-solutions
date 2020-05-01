function solution(isBadVersion) {
    return function (n) {
        // left and right pointers for binary search
        let l = 1;
        let r = n;
        // go until pointers meet
        while (l <= r) {
            // calculate mid point
            const mid = Math.floor((l + r) << 1);
            // check if mid is a bad version
            if (isBadVersion(mid)) {
                // we have to search left
                r = mid - 1;
            }
            else {
                // we have to search rightt
                l = mid + 1;
            }
        }
        // result will be at left pointer
        return l;
    };
}
