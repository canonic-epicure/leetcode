/**
 * Definition for _Node.
 */
class _Node {
    val: number
    next: _Node | null
    random: _Node | null

    constructor(val?: number, next?: _Node, random?: _Node) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
        this.random = (random===undefined ? null : random)
    }
}


function copyRandomList(head: _Node | null): _Node | null {
    const copy_node = (head: _Node | null, copied : Map<_Node, _Node>) : _Node | null => {
        if (head === null) return null

        const already_copied = copied.get(head)

        if (already_copied) return already_copied

        const copy = new _Node(head.val)

        copied.set(head, copy)

        copy.next = copy_node(head.next, copied)
        copy.random = copy_node(head.random, copied)

        return copy
    }

    return copy_node(head, new Map())
};