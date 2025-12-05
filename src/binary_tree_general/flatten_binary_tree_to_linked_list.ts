class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val ?? 0
        this.left = left ?? null
        this.right = right ?? null
    }
}

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
    const do_flatten = (root: TreeNode | null): TreeNode | null => {
        if (root == null) return null

        const left_tail = do_flatten(root.left)
        const right_tail = do_flatten(root.right)

        if (left_tail) {
            left_tail.right = root.right
            root.right = root.left
            root.left = null
        }

        return right_tail ?? left_tail ?? root
    };

    do_flatten(root)
};