function suggestedProducts(
    products: string[],
    searchWord: string
): string[][] {
    // result
    const res: string[][] = [];

    // sort products
    products.sort();

    // iterate thru search word
    for (let i = 0; i < searchWord.length; i++) {
        // get current search term
        const phrase: string = searchWord.substr(0, i + 1);

        // return products filtered by phrase
        res.push(
            products
                .filter(
                    (x) =>
                        x >= phrase &&
                        x <= phrase + 'zzzzzzzzzzzzzzzzz'
                )
                .slice(0, 3)
        );
    }

    return res;
}