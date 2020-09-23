export {};

// cache to store memoization of fib(n)
// with initial values 0:0 and 1:1
const memo: Map<number, number> = new Map([
    [0, 0],
    [1, 1],
]);

function fib(N: number): number {
    // check memo first
    if (memo.has(N)) return memo.get(N)!;

    // memo didn't have it, so add f(n-1) + f(n-2) and store in memo
    const res = fib(N - 1) + fib(N - 2);
    memo.set(N, res);
    return res;
}
