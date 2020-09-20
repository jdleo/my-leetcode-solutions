function removeDuplicates(S: string): string {
    // stack to hold characters
    const stack: string[] = [];

    // go through every character in S
    for (let i = 0; i < S.length; i++) {
        // check if there's characters in stack,
        // and last character is equal to this
        if (stack.length > 0 && stack[stack.length - 1] === S.charAt(i)) {
            // pop this character
            stack.pop();
        } else {
            // push this char as normal
            stack.push(S.charAt(i));
        }
    }

    // just join stack together and thats every character w/ no repeaters
    return stack.join('');
}
