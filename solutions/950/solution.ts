function deckRevealedIncreasing(deck: number[]): number[] {
    // result array (same size as deck)
    let res: number[] = Array(deck.length).fill(0);

    // really, the solution here is to achieve this pattern:
    // 1 2 3 4 5 6 7 8 ->
    // 1 8 2 7 3 6 4 5

    // first, we need to sort deck ascending
    deck.sort((a, b) => a - b);

    // create a queue
    const Q: number[] = [];

    // iterate from 0 to deck's size and fill the queue with indices
    for (let i = 0; i < deck.length; i++) Q.push(i);

    // iterate thru deck
    for (let i = 0; i < deck.length; i++) {
        // poll our queue, take that index, 'reveal' card
        res[Q.shift()!] = deck[i];
        // add next card to back of deck
        Q.push(Q.shift()!);
    }

    return res;
}
