function findOcurrences(text: string, first: string, second: string) {
    // split
    const txt: string[] = text.split(' ');

    // res
    const res: string[] = [];

    // iterate thru array of words
    for (let i = 2; i < txt.length; i++) {
        // check if last 2 are first and second
        if (txt[i - 2] === first && txt[i - 1] === second) {
            res.push(txt[i]);
        }
    }

    return res;
}