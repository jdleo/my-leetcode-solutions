function minSteps(s: string, t: string): number {
    // array representing balance of characters
    // from 0-26 (all lowercase letters)
    const balance: number[] = Array(26).fill(0);

    // iterate through length of s and t
    // (theyre equal in length)
    for (let i = 0; i < s.length; i++) {
        // increment for s's occurrence, decrement for t's
        balance[s.charCodeAt(i) - 97]++;
        balance[t.charCodeAt(i) - 97]--;
    }

    // number of steps needed to make balanced
    let steps: number = 0;

    // iterate thru our balance array
    for (let i = 0; i < balance.length; i++) {
        // add this (nonzero if unbalanced)
        // absolute value because this is a distance
        steps += Math.abs(balance[i]);
    }

    // note, we divide by 2 because for every character 'swap',
    // here's why: say we have strings a and b. {a:1} and {b:1} counts
    // if we swap a to b, not only does a become {a:0} but b becomes {b:2}
    // so each swap has 2x the magnitude
    return steps / 2;
}
