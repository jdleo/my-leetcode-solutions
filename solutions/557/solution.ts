function reverseWords(s: string): string {
    // split s into array
    const a: string[] = s.split('');

    // iterate thru string s
    for (let i = 0; i < s.length; i++) {
        // check if not a space (otherwise we will skip this)
        if (s.charCodeAt(i) !== 32) {
            // two pointers (for reversing words)
            let lo = i;
            let hi = i;

            // increase hi pointer til it hits next space (so we find current word)
            while (s.charCodeAt(hi) !== 32 && hi < s.length) {
                hi++;
            }

            // reverse characters from lo to hi-1
            reverse(a, lo, hi - 1);

            // set i to be hi + 1 (to go to next word)
            i = hi;
        }
    }

    // join s back
    return a.join('');
}

// helper function to reverse characters from lo to hi from a, in-place
function reverse(a: string[], lo: number, hi: number): void {
    // get mid point
    const mid = (lo + hi) >> 1;
    for (let i = lo; i <= mid; i++) {
        // reverse characters
        [a[i], a[hi - i + lo]] = [a[hi - i + lo], a[i]];
    }
}
