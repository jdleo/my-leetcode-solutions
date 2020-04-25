function reverseOnlyLetters(S) {
    // left and right pointers
    let l = 0;
    let r = S.length - 1;
    // result string array
    const s = S.split('');
    // go until pointers meet
    while (l <= r) {
        // check char code is not alphanumeric
        if (!isAlpha(S.charCodeAt(l))) {
            // move left pointer
            l++;
        }
        else if (!isAlpha(S.charCodeAt(r))) {
            // move right pointer
            r--;
        }
        else {
            // swap these characters
            const tmp = s[l];
            s[l] = s[r];
            s[r] = tmp;
            // move both pointers forward
            l++;
            r--;
        }
    }
    return s.join('');
}
// helper method to determine if char code is alphanumeric
function isAlpha(c) {
    return (c >= 97 && c <= 122) || (c >= 65 && c <= 90);
}
