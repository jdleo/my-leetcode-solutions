class CustomStack {
    private stack: number[];
    private maxSize: number;

    constructor(maxSize: number) {
        // initialize stack and max size
        this.stack = [];
        this.maxSize = maxSize;
    }

    push(x: number): void {
        // check if we are not at max size
        if (this.stack.length !== this.maxSize) {
            // push as normal
            this.stack.push(x);
        }
    }

    pop(): number {
        // if empty return -1, or return popped value
        return this.stack.length === 0 ? -1 : this.stack.pop()!;
    }

    increment(k: number, val: number): void {
        // increment bottom k values by val
        for (let i = 0; i < k && i < this.stack.length; i++) {
            this.stack[i] += val;
        }
    }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
