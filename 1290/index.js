/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const getDecimalValue = (head) => {
    // running binary number
    let b = 0;

    // array of bits
    const bits = [];

    // keep going until head is null
    while (head) {
        // push this bit
        bits.push(head.val);
        // move forward
        head = head.next;
    }

    // go backwards through array of bits
    for (let i = bits.length - 1; i >= 0; i--) {
        // add exponent to the i (from the right)
        b += bits[i] * Math.pow(2, bits.length - 1 - i);
    }

    return b;
};
