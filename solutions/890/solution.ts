function findAndReplacePattern(words: string[], pattern: string): string[] {
    // helper function to normalize string based on letter
    // (in order its seen) and counts
    // so, abb would be 011 and mee would be 011 and deq would be 012
    function normalize(s: string): string {
        // result string
        let res: string = '';
        // map for mapping letters to position its first encountered
        const map: Map<number, number> = new Map();
        // pointer
        let ptr: number = 0;
        // iterate thru string
        for (let i = 0; i < s.length; i++) {
            // check if this char is in map
            if (map.has(s.charCodeAt(i))) {
                // add the number to res
                res += map.get(s.charCodeAt(i));
            } else {
                // add this character and the pointer to map
                res += ptr;
                map.set(s.charCodeAt(i), ptr++);
            }
        }
        return res;
    }
    // normalize pattern
    pattern = normalize(pattern);
    // filter words based on the ones that match pattern
    return words.filter((word) => normalize(word) === pattern);
}
