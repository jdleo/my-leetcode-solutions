function generateTheString(n: number): string {
    // result string arr (with initial character inside of it)
    let res: string[] = [];

    // loop from 0 to n
    for (let i = 0; i < n; i++) {
        // just push a single 'a'
        res.push('a');
    }

    // if n was even, we need to make the first character a 'b'
    // so that both a's and b's are odd
    if (n % 2 === 0) res[0] = 'b';

    // join result arr to string
    return res.join('');
}
