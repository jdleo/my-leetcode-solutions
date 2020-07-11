// interface for group store
interface IGroup {
    [size: number]: number[][];
}

function groupThePeople(groupSizes: number[]): number[][] {
    // result
    const res: number[][] = [];

    // object to hold people
    const groups: IGroup = {};

    // iter thru people
    for (let i = 0; i < groupSizes.length; i++) {
        // get size
        const size: number = groupSizes[i];

        // add this person to its group size
        if (size in groups) {
            // check if last bucket is at max capacity
            if (groups[size][groups[size].length - 1].length === size) {
                // add new bucket
                groups[size].push([i]);
            } else {
                // just push to last bucket
                groups[size][groups[size].length - 1].push(i);
            }
        } else {
            groups[size] = [[i]];
        }
    }

    // now go thru each group size
    for (let i = 0; i < Object.keys(groups).length; i++) {
        // get size
        const size: number = parseInt(Object.keys(groups)[i]);

        // go thru buckets in this size
        for (let j = 0; j < groups[size].length; j++) {
            // push this bucket
            res.push(groups[size][j]);
        }
    }

    return res;
}
