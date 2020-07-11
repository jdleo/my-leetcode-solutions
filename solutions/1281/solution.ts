function subtractProductAndSum(n: number): number {
    // for running product, running sum
    let [prod, sum]: number[] = [1, 0];

    // keep going while there is still digits
    while (n > 0) {
        // get leftmost digit
        const leftmost: number = n % 10;

        // update prod, sum
        prod *= leftmost;
        sum += leftmost;

        // get next digit
        n = Math.floor(n / 10);
    }

    // return difference
    return prod - sum;
}
