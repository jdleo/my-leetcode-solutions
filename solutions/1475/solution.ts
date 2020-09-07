function finalPrices(prices: number[]): number[] {
    // stack to hold prices that haven't received a discount yet
    const stack: number[] = [];

    // iterate thru prices
    for (let i = 0; i < prices.length; i++) {
        // keep checking to see if there are prices to be discounted
        // AND if this current price can be used as a discount for a price in the stack
        while (stack.length !== 0 && prices[stack[stack.length - 1]] >= prices[i]) {
            // ok, this current price can be applied as a discount to value in top of stack
            // note: we use ! in typescript to indicate pop() must have a value here
            prices[stack.pop()!] -= prices[i];
        }

        // push this price to stack (since it is yet to receive a discount)
        stack.push(i);
    }

    // result is prices (which was modified to final sale price)
    return prices;
}
