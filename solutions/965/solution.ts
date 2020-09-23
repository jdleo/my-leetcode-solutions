function isUnivalTree(root: TreeNode | null): boolean {
    // check two conditions
    // 1. left node is null, or (left node val matches this node, and result of left subtree)
    // AND
    // 2. right node is null, or (right node val matches this node, and result of right subtree)
    return (
        (!root!.left || (root!.left!.val === root!.val && isUnivalTree(root!.left))) &&
        (!root!.right || (root!.right!.val === root!.val && isUnivalTree(root!.right)))
    );
}
