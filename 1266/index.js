/**
 * @param {number[][]} points
 * @return {number}
 */
const minTimeToVisitAllPoints = (points) => {
    // running total distance
    let total = 0;

    // iterate until n - 1 in points
    for (let i = 0; i < points.length - 1; i++) {
        // add distance to total
        total += distance(points[i], points[i+1]);
    }

    return total;
};

/**
 * Helper method to calculate distance
 * @param {number[]} p1
 * @param {number[]} p2
 * @return {number}
 */
const distance = (p1, p2) => {
    // get coordinates
    const [x1, y1, x2, y2] = [p1[0], p1[1], p2[0], p2[1]];

    // return the max distance based on absolute distances between x/y
    return Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));
};
