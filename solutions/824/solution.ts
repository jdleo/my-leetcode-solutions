function toGoatLatin(S: string): string {
    // split into words
    const words: string[] = S.split(' ');

    // iterate thru words
    for (let i = 0; i < words.length; i++) {
        // split this word
        const word = words[i].split('');

        // check if first letter IS NOT a vowel
        if (!isVowel(word[0])) {
            // remove first letter (shift) and add to end
            word.push(word.shift()!);
        }

        // add 'ma' no matter what
        word.push('m', 'a');

        // add i number of 'a's at the end
        for (let j = 0; j < i + 1; j++) word.push('a');

        // join back
        words[i] = word.join('');
    }

    // join back together
    return words.join(' ');
}

// set of vowels
const vowels: Set<string> = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

// helper method to check if vowel
const isVowel = (c: string) => vowels.has(c);
