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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const fetch = (pre_idx: number, in_idx_start: number, in_idx_end: number, seen : Set<number>) : TreeNode => {
        const root = new TreeNode(preorder[ pre_idx ])
        seen.add(preorder[ pre_idx ])

        if (in_idx_start === in_idx_end) return root

        let l = in_idx_start
        for (; l <= in_idx_end && inorder[l] !== root.val; l++) {}

        root.left = l > in_idx_start
            ? fetch(pre_idx + 1, in_idx_start, l - 1, seen)
            : null

        for (; pre_idx < preorder.length && seen.has(preorder[pre_idx]); pre_idx++) {}

        if (pre_idx >= preorder.length) return root

        root.right = l < in_idx_end ? fetch(pre_idx, l + 1, in_idx_end, seen) : null

        return root
    }

    return fetch(0, 0, inorder.length - 1, new Set())
};

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]))
console.log(buildTree([3,20,15,7, 9], [15,20,7, 3, 9]))
console.log(buildTree([3,2,1,4], [1,2,3,4]))

export {}