function numTeams(rating: number[]): number {
    // number of teams
    let res: number = 0;

    // iterate 3d
    for (let i = 0; i < rating.length; i++) {
        for (let j = i; j < rating.length; j++) {
            for (let k = j; k < rating.length; k++) {
                // make sure different soldiers
                if (i != j && j != k) {
                    // check if this is a valid team
                    if (
                        (rating[i] < rating[j] && rating[j] < rating[k]) ||
                        (rating[k] < rating[j] && rating[j] < rating[i])
                    )
                        res++;
                }
            }
        }
    }

    return res;
}
