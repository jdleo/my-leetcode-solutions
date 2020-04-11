/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = (S, T) => {
  // our 'stack'
  let stack = [];

  // iterate first through S's chars
  [...S].forEach((char) => {
    // check if backspace
    if (char === '#') {
      // pop from stack
      stack.pop();
    } else {
      // push to stack
      stack.push(char);
    }
  });

  // join stack for s, and clear stack
  const s = stack.join('');
  stack = [];

  // iterate next through T's chars
  [...T].forEach((char) => {
    // check if backspace
    if (char === '#') {
      // pop from stack
      stack.pop();
    } else {
      // push to stack
      stack.push(char);
    }
  });

  // join stack for t
  const t = stack.join('');

  // check if theyre equal
  return s === t;
};
