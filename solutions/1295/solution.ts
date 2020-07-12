function findNumbers(nums: number[]): number {
    // result (number of even digited numbers)
    let res: number = 0;

    // iterate thru nums
    for (let i = 0; i < nums.length; i++) {
        if (`${nums[i]}`.length % 2 === 0) res++;
    }

    return res;
}
