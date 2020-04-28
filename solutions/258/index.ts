var addDigits = function (num: number): number {
    if (num <= 9) return num;
    if (num % 9 === 0) return 9;
    return num % 9;
};
