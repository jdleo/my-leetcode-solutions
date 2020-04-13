/**
 * @param {number[]} deck
 * @return {number[]}
 */
const deckRevealedIncreasing = (deck) => {
  // sort deck ascending
  deck.sort((a, b) => a - b);

  // result array
  const res = [];

  // while there is still cards in deck
  while (deck.length) {
    // insert end of deck into queue
    res.unshift(deck.pop());
    // insert end of queue into queue
    res.unshift(res.pop());
  }

  // push first in queue to end of queue
  res.push(res.shift());

  return res;
};
