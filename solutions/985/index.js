function sumEvenAfterQueries(A, queries) {
    // result array
    const res = [];
    // current sum of even numbers
    let sum = 0;
    // first, add all even numbers to sum
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0)
            sum += A[i];
    }
    // then, go thru queries
    for (let i = 0; i < queries.length; i++) {
        // destructure query
        const [val, index] = queries[i];
        // check if adding val would make it even
        if ((val + A[index]) % 2 == 0) {
            // if even, add val, if odd, add new + old
            A[index] % 2 == 0
                ? (sum += val)
                : (sum += val + A[index]);
        }
        else {
            // if even, subtract old, if odd, do nothing
            A[index] % 2 == 0 ? (sum -= A[index]) : false;
        }
        // add val to old
        A[index] += val;
        // push current sum to res
        res.push(sum);
    }
    return res;
}
