function shortestToChar(S: string, C: string): number[] {
    // result array is same size as string S
    const res = new Array(S.length);
    // position of last C seen
    let last = Number.MIN_SAFE_INTEGER;
    // iterate thru S forwards
    for (let i = 0; i < S.length; i++) {
        // check if this is same character as C (need to update last)
        if (S.charAt(i) === C) last = i;
        // last C is closest C from the left, so set distance in res
        res[i] = i - last;
    }
    // reset last
    last = Number.MAX_SAFE_INTEGER;
    // iterate thru S backwards
    for (let i = S.length - 1; i > -1; i--) {
        // check if this is same character as C (need to update last)
        if (S.charAt(i) === C) last = i;
        // last C is closest C from the RIGHT,
        // but this time, take min of what's in res (because each character could be near two C's)
        res[i] = Math.min(res[i], last - i);
    }

    return res;
}
