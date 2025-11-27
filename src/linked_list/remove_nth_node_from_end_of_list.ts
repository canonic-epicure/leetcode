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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let node = head

    const nodes: ListNode[] = []

    while (node) {
        nodes.push(node)

        node = node.next
    }

    if (n === nodes.length) {
        return head.next
    }
    else if (n === 1) {
        nodes[ nodes.length - n - 1 ].next = null

        return head
    }
    else {
        nodes[ nodes.length - n - 1 ].next = nodes[ nodes.length - n ].next

        return head
    }
};