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


function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    const parent_map : Map<TreeNode, TreeNode | null> = new Map()
    const level_map : Map<TreeNode, number> = new Map()

    let has_q = false
    let has_p = false

    const forEach = (root: TreeNode | null, parent: TreeNode | null, level: number, func: (node: TreeNode, parent: TreeNode | null, level: number) => false | undefined) => {
        if (root === null) return

        if (func(root, parent, level) === false) return

        forEach(root.left, root, level + 1, func)
        forEach(root.right, root, level + 1, func)
    }

    forEach(root, null, 0, (node, parent, level) => {
        parent_map.set(node, parent)
        level_map.set(node, level)

        if (node === p) has_p = true
        if (node === q) has_q = true

        return has_q && has_p ? false : undefined
    })

    let p_node = p
    let q_node = q

    do {
        const level_p = level_map.get(p_node)
        const level_q = level_map.get(q_node)

        if (level_p > level_q) {
            p_node = parent_map.get(p_node)
        }
        else if (level_q > level_p) {
            q_node = parent_map.get(q_node)
        }
        else {
            break
        }
    } while (true)

    while (p_node !== q_node) {
        p_node = parent_map.get(p_node)
        q_node = parent_map.get(q_node)
    }

    return p_node
};