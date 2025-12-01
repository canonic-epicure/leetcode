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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {

    const fetch = (post_idx: number, in_idx_start: number, in_idx_end: number, seen : Set<number>) : TreeNode => {
        const root = new TreeNode(postorder[ post_idx ])
        seen.add(postorder[ post_idx ])

        if (in_idx_start === in_idx_end) return root

        let l = in_idx_end
        for (; l >= in_idx_start && inorder[l] !== root.val; l--) {}

        root.right = l < in_idx_end
            ? fetch(post_idx - 1, l + 1, in_idx_end, seen)
            : null

        for (; post_idx > 0 && seen.has(postorder[post_idx]); post_idx--) {}

        if (post_idx == -1) return root

        root.left = l > in_idx_start ? fetch(post_idx, in_idx_start, l - 1, seen) : null

        return root
    }

    return fetch(postorder.length - 1, 0, inorder.length - 1, new Set())
};

console.log(buildTree([9,3,15,20,7], [9,15,7,20,3]))

export {}