function lengthOfLongestSubstring(s) {
    // length of longest substring
    let max = 0;
    // set to keep track of characters seen
    const set = new Set();
    // left and right pointers (for sliding window)
    let lo = 0;
    let hi = 0;
    // length of string
    const n = s.length;
    // keep going until hi pointer reaches end
    while (hi < n) {
        // keep removing lo char from set until we have no repeats
        while (set.has(s.charAt(hi))) {
            // remove from set and increment lo
            set.delete(s.charAt(lo++));
        }
        // set new max substring
        max = Math.max(max, 1 + hi - lo);
        // add char to set and increment hi
        set.add(s.charAt(hi++));
    }
    return max;
}
