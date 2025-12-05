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

function sumNumbers(root: TreeNode | null): number {

    const do_sum = (root : TreeNode | null, stack : number[], res : { res : number }) => {
        if (root === null) return 'asd'

        stack.push(root.val)

        if (!root.left && !root.right) {
            res.res += stack.reduce((acc, el) => acc * 10 + el, 0)
        }

        do_sum(root.left, stack, res)
        do_sum(root.right, stack, res)

        stack.pop()
    }

    const res = { res : 0 }

    do_sum(root, [], res)

    return res.res
};


export {}