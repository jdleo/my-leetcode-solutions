function minTimeToVisitAllPoints(points: number[][]): number {
    // total min distance
    let dist = 0;

    for (let i = 0; i < points.length - 1; i++) {
        // get x y of this point and next point
        const [x1, y1] = points[i];
        const [x2, y2] = points[i + 1];

        // take the max between x distance and y distance
        dist += Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));
    }

    return dist;
}
