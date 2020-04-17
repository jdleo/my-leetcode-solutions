function isValid(s) {
    // stack to hold characters
    const stack = [];
    // iterate through string
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === ')') {
            // check invalid
            if (stack.pop() !== '(')
                return false;
        }
        else if (s.charAt(i) === ']') {
            // check invalid invalid
            if (stack.pop() !== '[')
                return false;
        }
        else if (s.charAt(i) === '}') {
            // check invalid
            if (stack.pop() !== '{')
                return false;
        }
        else {
            // push to stack as normal
            stack.push(s.charAt(i));
        }
    }
    // if there's anything left in stack, its invalid
    return stack.length === 0;
}
