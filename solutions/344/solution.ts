function reverseString(s: string[]): void {
    const mid = ~~(s.length / 2);
    for (let i = 0; i < mid; i++) {
        // swap
        [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
    }
}
