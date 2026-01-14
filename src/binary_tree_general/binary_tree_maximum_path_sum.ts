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


type Stat = {
    left_max : number,
    right_max : number,
    own_max : number
}

function maxPathSum(root: TreeNode | null): number {
    const stats : Map<TreeNode, Stat> = new Map()

    const inf_to_zero = (num : number | null) => {
        if (num === null || num === -Infinity) return 0

        return num
    }

    function node_stat(root: TreeNode | null): Stat | null {
        if (root == null) return null

        const left_stat = root.left ? node_stat(root.left) : null
        const right_stat = root.right ? node_stat(root.right) : null

        const left_max = left_stat
            ? Math.max(left_stat.left_max, left_stat.right_max)
            : -Infinity

        const right_max = right_stat
            ? Math.max(right_stat.left_max, right_stat.right_max)
            : -Infinity

        return {
            left_max : left_stat
                ? Math.max(root.val, left_max + root.val)
                : root.val,
            right_max : right_stat
                ? Math.max(root.val, right_max + root.val)
                : root.val,
            own_max : Math.max(
                Math.max(
                    root.val,
                    root.val + inf_to_zero(left_max),
                    root.val + inf_to_zero(right_max),
                    root.val + inf_to_zero(left_max) + inf_to_zero(right_max),
                ),
                left_stat
                    ? left_stat.own_max
                    : -Infinity,
                right_stat
                    ? right_stat.own_max
                    : -Infinity
            )
        }
    };

    const stat = node_stat(root)

    return stat.own_max
};




const root = new TreeNode(
    2,
    new TreeNode(
        -1
    ),
)

console.log(maxPathSum(root))