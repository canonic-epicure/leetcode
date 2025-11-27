/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || k === 0) return head

    const nodes: ListNode[] = []

    let node = head

    while (node) {
        nodes.push(node)

        node = node.next
    }

    k = k % nodes.length

    if (k === 0) return head

    nodes[ nodes.length - 1 ].next = nodes[ 0 ]
    nodes[ nodes.length - 1 - k ].next = null

    return nodes[ nodes.length - k ]
};