export {};

function maxScoreWords(words: string[], letters: string[], score: number[]): number {
    // counts of letters that we have available
    const letter_counts: { [letter: string]: number } = {};

    // sort words descending, based on scores they would yield
    words.sort((a, b) => getScore(b, score) - getScore(a, score));

    // fill counts
    for (let l of letters) {
        if (!(l in letter_counts)) letter_counts[l] = 0;
        letter_counts[l]++;
    }

    // total score
    let sum = 0;

    // go thru words that are sorted by scores they would yield
    for (let word of words) {
        console.log(letter_counts);

        // go thru letter by letter to make sure we have letters left for this
        for (let i = 0; i < word.length; i++) {
            // check if we still have letters
            if (!(word.charAt(i) in letter_counts) || letter_counts[word.charAt(i)] <= 0) {
                break;
            } else {
                letter_counts[word.charAt(i)]--;
            }

            // check if we're at last letter (whole string counted)
            if (i === word.length - 1) {
                console.log(word);

                sum += getScore(word, score);
                console.log(letter_counts);
            }
        }
    }

    return sum;
}

// memo cache for word
const memo: { [word: string]: number } = {};

// helper function to determine word score
function getScore(word: string, score: number[]): number {
    if (word in memo) {
        return memo[word];
    } else {
        let sum = 0;
        for (let i = 0; i < word.length; i++) {
            sum += score[word.charCodeAt(i) - 97];
        }
        memo[word] = sum;
        return sum;
    }
}
