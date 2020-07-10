function numJewelsInStones(J: string, S: string): number {
    // set of jewels
    const jewels: Set<string> = new Set();

    // fill jewel set
    for (let i = 0; i < J.length; i++) {
        jewels.add(J.charAt(i));
    }

    // res
    let res: number = 0;

    // go thru S and count J's
    for (let i = 0; i < S.length; i++) {
        if (jewels.has(S.charAt(i))) res++;
    }

    return res;
}
