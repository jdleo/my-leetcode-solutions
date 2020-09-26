class BrowserHistory {
    // class attributes
    private homepage: string;
    private history: string[];
    private ptr: number;

    constructor(homepage: string) {
        // set attrs
        this.homepage = homepage;
        this.history = [homepage];
        this.ptr = 0;
    }

    visit(url: string): void {
        // clear history after pointer
        this.history.splice(this.ptr + 1, this.history.length - (this.ptr + 1));
        // add new history item
        this.history.push(url);
        // inc ptr
        this.ptr++;
    }

    back(steps: number): string {
        // bounds check for new pointer (cant go lower than 0)
        this.ptr = Math.max(this.ptr - steps, 0);
        // return url at pointer
        return this.history[this.ptr];
    }

    forward(steps: number): string {
        // bounds check for new pointer (cant go higher than length of history)
        this.ptr = Math.min(this.ptr + steps, this.history.length - 1);
        // return url at pointer
        return this.history[this.ptr];
    }
}
