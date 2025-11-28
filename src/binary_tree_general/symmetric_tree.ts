interface TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
}

function isSymmetric(root: TreeNode | null): boolean {
    const do_is_symmetric = (root1: TreeNode | null, root2: TreeNode | null): boolean => {
        if (!root1 && !root2) return true

        if (!root1 || !root2) return false

        if (root1.val !== root2.val) return false

        return do_is_symmetric(root1.left, root2.right) && do_is_symmetric(root1.right, root2.left)
    };

    if (!root) return true

    return do_is_symmetric(root.left, root.right)
};

