function validateStackSequences(pushed, popped) {
    // 'stack'
    const stack = [];
    // pointers for both stacks
    let i = 0;
    let j = 0;
    // go while there are still things to pop/push
    while (i < pushed.length || j < popped.length) {
        // check if stack not empty
        if (stack.length > 0) {
            // check if last element in stack is current to be popped
            if (stack[stack.length - 1] === popped[j]) {
                // pop from stack and increment popped ptr
                stack.pop();
                j++;
                // continue loop
                continue;
            }
            else {
                // check if i reached end of pushed
                if (i >= pushed.length)
                    return false;
            }
        }
        // just push value to be pushed and increment
        stack.push(pushed[i++]);
    }
    // valid
    return true;
}
