function threeConsecutiveOdds(arr: number[]): boolean {
    // current number of odds
    let odds = 0;
    // iterate thru arr
    for (let i = arr.length - 1; i >= 0; i--) {
        // if even, reset count
        if (arr[i] % 2 === 0) odds = 0;
        // it's odd, increment and check if we have 3 consecutive
        else if (++odds === 3) return true;
    }
    // never found 3 consecutive odds
    return false;
}
