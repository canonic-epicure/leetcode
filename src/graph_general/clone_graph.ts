class _Node {
    val: number
    neighbors: _Node[]

    constructor(val?: number, neighbors?: _Node[]) {
        this.val = (val===undefined ? 0 : val)
        this.neighbors = (neighbors===undefined ? [] : neighbors)
    }
}


function cloneGraph(node: _Node | null): _Node | null {
    const visited: Map<_Node, _Node> = new Map()

    const do_clone = (node: _Node | null) : _Node | null => {
        if (node === null) return null

        const cloned = visited.get(node)
        if (cloned) return cloned

        const clone = new _Node(node.val)

        visited.set(node, clone)

        clone.neighbors = node.neighbors.map(do_clone)

        return clone
    }

    return do_clone(node)
};

