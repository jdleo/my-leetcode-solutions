function removeOuterParentheses(S: string): string {
    // our 'balance' or 'scale'
    let bal: number = 0;

    // result
    let out: string = '';

    // iterate thru string
    for (let i = 0; i < S.length; i++) {
        // current string
        let cur = '';

        // check character and balance
        if (S.charAt(i) === '(' && bal > 0) {
            // just push
            out += S.charAt(i);
        } else if (S.charAt(i) === ')' && bal > 1) {
            // just push
            out += S.charAt(i);
        }

        // +1 if open, -1 if close
        bal += S.charAt(i) === '(' ? +1 : -1;
    }

    return out;
}
