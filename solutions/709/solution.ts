// DISCLAIMER : I KNOW WE CAN USE .toLowerCase(), I am doing this from scratch
function toLowerCase(str: string): string {
    // result string array
    let res: string[] = [];

    // iterate thru string
    for (let i = 0; i < str.length; i++) {
        // get char code
        const code = str.charCodeAt(i);
        // check if uppercase
        if (code <= 90 && code >= 65) {
            // convert to lowercase and add to res
            res.push(String.fromCharCode(code + 32));
        } else {
            // just add to array
            res.push(str.charAt(i));
        }
    }

    // result joined
    return res.join('');
}
