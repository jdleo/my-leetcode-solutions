class FreqStack {
    // counts (frequencies) for each num
    private counts: { [n: number]: number };
    // there is stack at each frequency
    private map: { [freq: number]: number[] };
    // current max frequency
    private max: number;

    constructor() {
        // counts (frequencies) for each num
        this.counts = {};
        // {freq: []} stack for each frequency
        this.map = {};
        // current max frequency
        this.max = 0;
    }

    push(x: number) {
        // increment count (freq) for this number
        if (!(x in this.counts)) this.counts[x] = 0;
        this.counts[x]++;

        // set new max frequency (if need be)
        this.max = Math.max(this.max, this.counts[x]);

        // push this num to map's stack
        if (!(this.counts[x] in this.map))
            this.map[this.counts[x]] = [];
        this.map[this.counts[x]].push(x);
    }

    pop(): number {
        // get top of stack for current max frequency
        const x: number = this.map[this.max].pop();
        // decrement count for this number
        this.counts[x]--;
        // if stack at this frequency is empty, decrement max freq
        if (this.map[this.max].length === 0) this.max--;
        // return popped number
        return x;
    }
}