function maximum69Number(num: number): number {
    // result number array to return
    let res: string[] = `${num}`.split('');

    // counter for orders (so we know what to add back)
    let ord: number = 0;

    // go thru digits
    for (let i = 0; i < res.length; i++) {
        // check if this is a 6
        if (res[i] === '6') {
            // change this to a 9 and return it (this will be max)
            res[i] = '9';
            return parseInt(res.join(''));
        }
    }

    // join and parse back to int
    return parseInt(res.join(''));
}
