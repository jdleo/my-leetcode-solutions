function removeCoveredIntervals(intervals: number[][]): number {
    // number of intervals removed
    let removed = 0;
    // sort intervals by start-time ascending, if they're equal, sort end-time descending
    intervals.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : b[1] - a[1]));
    // this marks the last interval's end-time, that WASN'T removed
    // (since we do not want to compare with an interval that has been removed)
    let lastEndTime = -1;
    // iterate through intervals
    for (let i = 0; i < intervals.length; i++) {
        // simply check if end-time is less or equal than previous end time (means its overlapping)
        if (intervals[i][1] <= lastEndTime) removed++;
        // this means this interval was find, we can reset lastEndTime
        else lastEndTime = intervals[i][1];
    }

    // remaining in list is just length of intervals - removed
    return intervals.length - removed;
}
