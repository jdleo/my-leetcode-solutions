function diStringMatch(S: string): number[] {
    // result array
    const res: number[] = [];

    // lo and hi pointers
    let lo = 0,
        hi = S.length;

    // iterate thru string
    for (let i = 0; i < S.length; i++) {
        // push lo pointer if char code is 73 (I),
        // push hi pointer if char code is 68 (D)
        // also increment and decrement respectively, after pushing
        res.push(S.charCodeAt(i) === 73 ? lo++ : hi--);
    }

    // lastly, put lo pointer at the end, since it will always fulfill
    res.push(lo);

    return res;
}
