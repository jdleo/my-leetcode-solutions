function xorQueries(arr: number[], queries: number[][]): number[] {
    // result array
    const res: number[] = [];

    // generate prefix array
    for (let i = 1; i < arr.length; i++) {
        arr[i] ^= arr[i - 1];
    }

    // iterate thru queries
    for (let i = 0; i < queries.length; i++) {
        // get query values
        const [x, y] = queries[i];
        // get prefix of first, xor'd with prefix of second
        // unless it's 0, then just return prefix of second
        res.push(x > 0 ? arr[x - 1] ^ arr[y] : arr[y]);
    }

    return res;
}
