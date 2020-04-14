/**
 * @param {string} characters
 * @param {number} combinationLength
 */
const CombinationIterator = function (characters, combinationLength) {
    // pointer for iterator
    this.ptr = 0;

    // to store combinations
    this.combinations = [];

    // generate combinations
    this.generate(characters, combinationLength, '', 0);

    // get size of string
    this.size = this.combinations.length;
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function () {
    // return and increment pointer
    return this.combinations[this.ptr++];
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function () {
    // true if ptr hasnt reached end of combinations
    return this.ptr !== this.size;
};

/**
 * helper method to generate combinations given string and length
 * @param {string} characters
 * @param {number} combinationLength
 * @param {string} str current string generated thus far
 * @param {number} ptr pointer where we are in string
 */
CombinationIterator.prototype.generate = function (characters, combinationLength, str, ptr) {
    // base case
    if (str.length === combinationLength) {
        // push to combinations
        this.combinations.push(str);
    } else {
        // iterate from ptr to characters length
        for (let i = ptr; i < characters.length; i++) {
            // simulate taking this character
            this.generate(characters, combinationLength, str + characters.charAt(i), i + 1);
        }
    }
};
