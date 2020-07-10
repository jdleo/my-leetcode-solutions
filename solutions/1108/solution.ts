function defangIPaddr(address: string): string {
    // result string
    let res: string = '';

    // iter thru address
    for (let i = 0; i < address.length; i++) {
        // check if this is a dot
        if (address.charAt(i) === '.') {
            res += '[.]';
        } else {
            res += address.charAt(i);
        }
    }

    return res;
}
