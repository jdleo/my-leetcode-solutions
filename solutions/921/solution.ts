function minAddToMakeValid(S: string): number {
    // number of parantheses we have to add
    let res: number = 0;

    // our balance
    let bal: number = 0;

    // iterate thru string
    for (let i = 0; i < S.length; i++) {
        // check if this is closing parantheses
        if (S.charCodeAt(i) === 41) {
            // check if there is any opening parantheses in balance
            if (bal > 0) {
                // decrease balance
                bal--;
            } else {
                // we need to 'add' parantheses
                res++;
            }
        } else {
            // increase balance
            bal++;
        }
    }

    // add bal to res, because if bal > 0, that represents
    // opening parantheses that were unaccounted for
    return res + bal;
}
