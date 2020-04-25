class LRUCache extends Map {
    // constructor
    constructor(capacity) {
        // call parent constructor
        super();
        // set fields
        this.capacity = capacity;
    }
    /**
     * override built-in get() method to update number order on get()
     * @override
     */
    get(key) {
        // check if it doesn't contain key
        if (!this.has(key))
            return -1;
        // delete key, and re-add to add to end of map
        const val = super.get(key);
        this.delete(key);
        this.set(key, val);
        // return value
        return val;
    }
    put(key, value) {
        // check if we're below capacity, or just updating existing key
        if (this.size < this.capacity || this.has(key)) {
            // call get() method to update order
            this.get(key);
            // insert as normal
            this.set(key, value);
        }
        else if (this.size > 0) {
            // we checked if size is 0, so we have something to delete
            this.delete(this.keys().next().value);
            // now, add new key:value
            this.set(key, value);
        }
    }
}
