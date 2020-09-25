function displayTable(orders: string[][]): string[][] {
    // result
    const res: string[][] = [];
    // set of food items
    const foodItems: Set<string> = new Set();
    // object representing number:table mappings
    // where table representings item:count mappings
    const tables: { [table: string]: { [item: string]: number } } = {};
    // iterate thru orders
    for (let i = 0; i < orders.length; i++) {
        // get table number, and food item ordered
        const [_, table, foodItem] = orders[i];
        // check if we don't have an entry for this table, if not, create it
        if (!(table in tables)) tables[table] = {};
        // increment count for this food item for that table (put or default)
        if (!(foodItem in tables[table])) tables[table][foodItem] = 0;
        tables[table][foodItem]++;
        // also add this food item to the total food items set
        foodItems.add(foodItem);
    }

    // now, sort food items alphabetically
    const foodItemsSorted = Array.from(foodItems).sort();

    // first row in res is column row
    res.push(['Table', ...foodItemsSorted]);

    // there are only [1,500] tables, let's iterate
    for (let i = 1; i <= 500; i++) {
        // check if this table had any orders
        if (i in tables) {
            // create array, size of foodItemsSorted + 1
            const currentTable = Array(foodItemsSorted.length + 1);
            // first element is just the table number
            currentTable[0] = `${i}`;
            // go through all food items now
            for (let j = 0; j < foodItemsSorted.length; j++) {
                // get current food item
                const foodItem = foodItemsSorted[j];
                // push 0 for this food item if this table never ordered it,
                // otherwise, push the count (btw, we use j+1 since first element is table number)
                currentTable[j + 1] = foodItem in tables[i] ? `${tables[i][foodItem]}` : '0';
            }
            // push that table to res
            res.push(currentTable);
        }
    }

    return res;
}
