function solution(
    isBadVersion: (n: number) => boolean
): (n: number) => number {
    return function (n: number): number {
        // go from n to 1
        for (let i = n; i >= 1; i--) {
            // check if good version
            if (!isBadVersion(i)) {
                // return i+1
                return i + 1;
            }
        }

        // none found
        return 1;
    };
}
