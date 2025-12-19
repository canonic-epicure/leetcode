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

function getMinimumDifference(root: TreeNode | null): number {
    const in_order = (root: TreeNode | null, func: (node: TreeNode) => void) => {
        if (root === null) return

        in_order(root.left, func)

        func(root)

        in_order(root.right, func)
    }

    let prev: TreeNode = null
    let min = Infinity

    in_order(root, node => {
        if (prev) {
            const diff = Math.abs(prev.val - node.val)

            if (diff < min) min = diff
        }

        prev = node
    })

    return min
};

export {}