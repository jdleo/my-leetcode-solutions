class CombinationIterator {
    // characters and combo length
    private characters: string;
    private combinationLength: number;

    // binary number representing set characters
    // ex: if we have "abc"
    // a b c
    // 0 0 1 = "c"
    // 0 1 0 = "b"
    // 0 1 1 = "bc"
    private sequence: number;

    constructor(characters: string, combinationLength: number) {
        // store characters and combination length
        this.characters = characters;
        this.combinationLength = combinationLength;
        // set number to be 2^(length of characters) - 1
        this.sequence = 2 ** characters.length - 1;
    }

    // return what's at pointers
    next(): string {
        // if number of bits set is not == combination length,
        // its not a valid sequence anyways
        // keep decreasing sequence til it is
        while (this.bits(this.sequence) !== this.combinationLength) {
            this.sequence--;
        }

        let res = '';
        // iterate from 0 to combination length, getting each set bit
        const n = this.characters.length;
        for (let i = 0; i < n; i++) {
            // check whether i'th bit is set (from left)
            if (this.sequence & (1 << (n - 1 - i))) {
                // take this character
                res += this.characters.charAt(i);
            }
        }

        // decrease sequence for next iteration
        this.sequence--;

        return res;
    }

    hasNext(): boolean {
        // check if sequence has more valid strings
        while (this.bits(this.sequence) !== this.combinationLength) {
            // also, if sequence ever hits 0, no more left
            if (this.sequence-- <= 0) return false;
        }
        // no problems
        return true;
    }

    // helper method to count number of set bits in binary number
    bits(n: number): number {
        let res: number = 0;
        while (n > 0) {
            res += n & 1;
            n >>= 1;
        }
        return res;
    }
}
