function pancakeSort(arr: number[]): number[] {
    // result array
    const res: number[] = [];
    // index of current max, front and back arrays
    let max: number;
    let front, back: number[];
    // iterate from n backwards
    for (let i = arr.length; i > 0; i--) {
        // find index of i (current biggest number in slice)
        max = arr.indexOf(i);

        // make sure max + 1 isnt i
        if (max + 1 !== i) {
            // get front array, and reverse (so max is in front)
            front = arr.slice(0, max + 1).reverse();
            // replace the array from 0 to max + 1 with front
            arr.splice(0, max + 1, ...front);
            res.push(max + 1);

            // get back array and reverse
            back = arr.slice(0, i).reverse();
            // replace the array
            arr.splice(0, i, ...back);
            res.push(i);
        }
    }
    return res;
}
