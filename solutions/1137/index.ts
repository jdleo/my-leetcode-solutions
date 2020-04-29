export {};

// memo map for holding trib numbers
const memo: Map<number, number> = new Map();
memo.set(0, 0);
memo.set(1, 1);
memo.set(2, 1);

function tribonacci(n: number): number {
    // check if n is in memo
    if (memo.has(n)) {
        // return trib value in memo
        return memo.get(n);
    } else {
        // we need to compute n and set in memo
        const trib: number =
            tribonacci(n - 1) +
            tribonacci(n - 2) +
            tribonacci(n - 3);
        memo.set(n, trib);

        // return what we just computed from memo
        return memo.get(n);
    }
}