function complexNumberMultiply(a: string, b: string): string {
    // get a and b for both strings
    const [t1, t2] = [a.split('+'), b.split('+')];
    const [a1, b1] = [+t1[0], +t1[1].slice(0, -1)];
    const [a2, b2] = [+t2[0], +t2[1].slice(0, -1)];

    // multiplication is in form (a + bi) * (a + bi)
    // so we can use FOIL (first, outer, inner, last)
    const first = a1 * a2; // constant
    const outer = a1 * b2; // imaginary degree 1
    const inner = b1 * a2; // imaginary degree 1
    const last = b1 * b2 * -1; // constant - imaginary degree 2 (so multiply -1 to it as well)

    // add constants
    const A = first + last;
    const B = outer + inner;

    return `${A}+${B}i`;
}
