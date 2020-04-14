const RecentCounter = function () {
    // datastore for hits
    this.hits = [];
};
RecentCounter.prototype.ping = function (t) {
    // check if at max size
    if (this.hits.length === 3001) {
        // get rid of first element
        this.hits.shift();
    }
    // add to hits
    this.hits.push(t);
    // return length of filter (where item is >= t - 3000)
    return this.hits.filter((x) => x >= t - 3000).length;
};
