class MyHashSet {
    // array to hold keys
    private arr: number[];
    // max size of keys
    private size: number;

    constructor() {
        this.size = 10007;
        // fill array with size keys, initialized to -1 (means uninitialized)
        this.arr = Array(this.size).fill(-1);
    }

    add(key: number): void {
        // add this number to the hash value in arr of key
        this.arr[this.hash(key)] = key;
    }

    remove(key: number, i = 0): void {
        // base case (i is too big, we would have found it by now
        if (i === this.size) return;
        // calculate current quadratic probe
        const p = (key + i * i) % this.size;
        // check if we found it
        if (this.arr[p] === key) {
            this.arr[p] = -1;
        } else {
            this.remove(key, i + 1);
        }
    }

    contains(key: number, i = 0): boolean {
        // base case (i is too big, we would have found it by now
        if (i === this.size) return false;
        // calculate current quadratic probe
        const p = (key + i * i) % this.size;
        // check if this is key
        return this.arr[p] === key ? true : this.contains(key, i + 1);
    }

    // helper method to hash a key
    hash(key: number, i = 0): number {
        // calculate current quadratic probe
        const p = (key + i * i) % this.size;
        // if this is vacant or the key already, return this slot, otherwise, keep incrementing i
        return this.arr[p] === -1 || this.arr[p] === key ? p : this.hash(key, i + 1);
    }
}
