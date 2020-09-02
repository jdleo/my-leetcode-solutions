function freqAlphabets(s: string): string {
    // result array
    let res: string[] = [];

    // iterate thru string backwards
    for (let i = s.length - 1; i >= 0; i--) {
        // check if this is a regular 'digit'
        if (s.charCodeAt(i) <= 57 && s.charCodeAt(i) >= 48) {
            // push to array as normal (corresponding letter. ex: 1 maps to 'a')
            res.push(String.fromCharCode(s.charCodeAt(i) + 48));
        } else {
            // we know this is a # sign now
            // get this digit, and next digit, and parse
            const digit: number = parseInt(s.charAt(i - 2) + s.charAt(i - 1));

            // convert to corresponding letter (10 -> j)
            res.push(String.fromCharCode(digit + 96));

            // move down (since we know we took care of next two)
            i -= 2;
        }
    }

    res.reverse();
    return res.join('');
}
