function suggestedProducts(products: string[], searchWord: string): string[][] {
    // result
    const res: string[][] = [];
    products.sort();
    // iterate thru search word
    for (let i = 0; i < searchWord.length; i++) {
        // get current prefix (search phrase)
        const prefix = searchWord.substring(0, i + 1);
        // push products filtered by whether it starts with prefix or not
        res.push(products.filter((product) => product.startsWith(prefix)).slice(0, 3));
    }

    return res;
}
