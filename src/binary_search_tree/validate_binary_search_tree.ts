class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function isValidBST(root: TreeNode | null): boolean {
    const in_order = (root: TreeNode | null, func: (node: TreeNode) => false | void) : false | void => {
        if (root === null) return

        if (in_order(root.left, func) === false) return false

        if (func(root) === false) return false

        if (in_order(root.right, func) === false) return false
    }

    let prev: TreeNode = null

    const res = in_order(root, node => {
        if (prev) {
            if (prev.val > node.val) return false
        }

        prev = node
    })

    return res !== false
};

