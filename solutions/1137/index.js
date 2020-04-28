"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// memo map for holding trib numbers
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
memo.set(2, 1);
function tribonacci(n) {
    // check if n is in memo
    if (memo.has(n)) {
        // return trib value in memo
        return memo.get(n);
    }
    else {
        // we need to compute n and set in memo
        const trib = tribonacci(n - 1) +
            tribonacci(n - 2) +
            tribonacci(n - 3);
        memo.set(n, trib);
        // return what we just computed from memo
        return memo.get(n);
    }
}
