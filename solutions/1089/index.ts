function duplicateZeros(arr: number[]): void {
    for (let i: number = 0; i < arr.length; i++) {
        if (i === 0) {
            arr.splice(i, 0, 0);
            arr.pop();
            i++;
        }
    }
}
