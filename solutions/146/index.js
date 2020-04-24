class LRUCache {
    // constructor
    constructor(capacity) {
        // set fields
        this.capacity = capacity;
        this.obj = {};
        this.queue = Array(capacity).fill(NaN);
    }
    get(key) {
        // if key is in obj, return val
        return key in this.obj ? this.obj[key] : -1;
    }
    put(key, value) { }
}
