class RecentCounter extends Array<number> {
    // override push method to remove least recent element if at max capacity
    push(t: number): number {
        // shift first number out, if at max capacity
        if (this.length === 3001) this.shift();
        // call parent push() as normal
        return super.push(t);
    }

    ping(t: number): number {
        // push this ping to array
        this.push(t);
        // counter
        let count = 0;
        // iterate backwards through array
        for (let i = this.length - 1; i >= 0; i--) {
            // check if this ping is within 3000 seconds
            if (t - this[i] <= 3000) {
                count++;
            } else {
                // just break loop, because ones further back wont be within 3000
                break;
            }
        }
        return count;
    }
}
