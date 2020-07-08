function firstUniqChar(s: string): number {
    // map of character counts
    const map: Map<string, number> = new Map();

    // map for char indices
    const index: Map<string, number> = new Map();

    // iterate thru string, incrementing char counts
    for (let i = 0; i < s.length; i++) {
        const c: string = s.charAt(i);
        // increment char count
        map.set(c, map.get(c) ? map.get(c) + 1 : 1);
        // set index
        index.set(c, i);
    }

    // go thru map
    for (const entry of map.entries()) {
        // check if non-repeating
        if (entry[1] === 1) return index.get(entry[0]);
    }

    // no non-repeating characters found
    return -1;
}