class LRUCache {
    // class attributes
    private capacity: number;
    private obj: { [key: number]: number };
    private queue: number[];

    // constructor
    constructor(capacity: number) {
        // set fields
        this.capacity = capacity;
        this.obj = {};
        this.queue = Array(capacity).fill(NaN);
    }

    get(key: number): number {
        // if key is in obj, return val
        return key in this.obj ? this.obj[key] : -1;
    }

    put(key: number, value: number): void {}
}
