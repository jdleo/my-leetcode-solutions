/**
 * @param {string} s
 * @return {string}
 */
function frequencySort(s: string): string {
    // char counts
    const counts: { [char: string]: number } = {};

    // result str
    const res: string = '';

    // iterate thru S, incrementing char counts
    for (let i = 0; i < s.length; i++) {
        // check if in counts
        if (s.charAt(i) in counts) {
            // increment
            counts[s.charAt(i)]++;
        } else {
            // set count to 1
            counts[s.charAt(i)] = 1;
        }
    }

    // get items in counts
    const items = Object.items(counts);

    // return S array joined
    return res;
}
