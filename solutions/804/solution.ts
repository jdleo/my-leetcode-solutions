function uniqueMorseRepresentations(words: string[]): number {
    // morse alphabet
    const morse: string[] = [
        '.-',
        '-...',
        '-.-.',
        '-..',
        '.',
        '..-.',
        '--.',
        '....',
        '..',
        '.---',
        '-.-',
        '.-..',
        '--',
        '-.',
        '---',
        '.--.',
        '--.-',
        '.-.',
        '...',
        '-',
        '..-',
        '...-',
        '.--',
        '-..-',
        '-.--',
        '--..',
    ];

    // set to keep track of unique words
    const set: Set<string> = new Set();

    // iterate thru words
    for (let word of words) {
        // morse string builder
        let m: string = '';

        // iterate thru words characters and encode it
        for (let i = 0; i < word.length; i++) {
            // add the morse representation of this letter
            m += morse[word.charCodeAt(i) - 97];
        }

        // add to set
        set.add(m);
    }

    // unique words is size of set
    return set.size;
}
