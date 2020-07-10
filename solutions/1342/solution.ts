function numberOfSteps(num: number): number {
    // to count steps
    let res: number = 0;

    // keep going until num is 0
    while (num > 0) {
        // check if even/odd
        if ((num & 1) === 1) {
            num--;
        } else {
            num /= 2;
        }

        res++;
    }

    return res;
}
