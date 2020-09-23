function pseudoPalindromicPaths(root: TreeNode | null, path = new Uint16Array(9)): number {
    // base case
    if (!root) return 0;
    // add this root's value to path count (only can be 1-9)
    const new_path = Uint16Array.from(path);
    new_path[root!.val - 1]++;

    // check if leaf
    if (!root.left && !root.right) {
        // check if path is a pseudo palindrome, return 1 if so (which will bubble up in recursion)
        return isPseudoPalindrome(new_path) ? 1 : 0;
    }

    // return the results of the left and right subtrees
    return pseudoPalindromicPaths(root.left, new_path) + pseudoPalindromicPaths(root.right, new_path);
}

/**
 * helper method to determine if a path (in form of counts) is pseudo palindrome
 * @param path : path to check
 */
function isPseudoPalindrome(path: Uint16Array): boolean {
    // odd count
    let odds = 0;
    // count odd counts
    for (let i = 0; i < path.length; i++) {
        odds += path[i] & 1;
    }
    // check either no odd val counts, or just one
    return odds === 0 || odds === 1;
}
