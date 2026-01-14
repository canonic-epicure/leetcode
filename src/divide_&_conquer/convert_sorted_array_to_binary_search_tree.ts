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


function sortedArrayToBST(nums: number[]): TreeNode | null {
    const array_to_bst = (nums: number[], start: number, end: number) : TreeNode | null => {
        if (start >= end) return null

        const root_idx = start + Math.floor((end - start) / 2)
        return new TreeNode(
            nums[ root_idx ],
            array_to_bst(nums, start, root_idx),
            array_to_bst(nums, root_idx + 1, end)
        )
    }

    return array_to_bst(nums, 0, nums.length)
};


