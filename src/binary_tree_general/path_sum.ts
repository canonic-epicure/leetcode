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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (root === null) return false

    if (!root.left && !root.right) {
        return root.val === targetSum
    }
    else {
        return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
    }
};

