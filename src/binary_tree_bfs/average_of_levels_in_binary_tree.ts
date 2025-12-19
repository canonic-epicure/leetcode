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

function averageOfLevels(root: TreeNode | null): number[] {
    const res: number[] = []

    let level: TreeNode[] = [ root ]

    while (level.length) {
        res.push(
            level.reduce((acc, el) => acc + el.val, 0) / level.length
        )

        level = level.reduce((acc, el) => {
            if (el.left) acc.push(el.left)
            if (el.right) acc.push(el.right)
            return acc
        }, [])
    }

    return res
};

export {}