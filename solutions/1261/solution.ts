class FindElements {
    // root attribute (contaminated tree)
    private root: TreeNode | null;

    // flag for if we found value
    private found: boolean = false;

    // constructor
    constructor(root: TreeNode | null) {
        // set root
        this.root = root;
    }

    // method to find target
    find(target: number): boolean {
        // set flag to false (before search)
        this.found = false;
        // call our recursive method to clean tree and find value
        // start with 0, since root.val == 0
        this.cleanAndFind(this.root, 0, target);

        // result should be in flag if it was found
        return this.found;
    }

    // recursive method to decontaminate tree
    cleanAndFind(root: TreeNode | null, cur: number, target: number) {
        // base case
        if (!root) return;

        // check if current value (cur) is target
        if (cur === target) {
            // set flag and break
            this.found = true;
            return;
        }

        // set cur for left and right nodes based on
        // left.val == 2 * x + 1
        // right.val == 2 * x + 2
        this.cleanAndFind(root.left, 2 * cur + 1, target);
        this.cleanAndFind(root.right, 2 * cur + 2, target);
    }
}
