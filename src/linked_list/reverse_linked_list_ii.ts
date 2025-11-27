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

function reverseBetween(head: ListNode, left: number, right: number): ListNode {
    if (left === right) return head

    let node = head

    let i = 1
    const reversal: ListNode[] = []

    let turning_point: ListNode = left === 1 ? head : null

    while (node && i <= right) {
        if (left <= i && i <= right) reversal.push(node)

        i++
        if (i === left) turning_point = node
        node = node.next
    }

    const tail = reversal[ reversal.length - 1 ].next

    for (let i = reversal.length - 1; i > 0; i--) {
        const node = reversal[ i ]

        node.next = reversal[ i - 1 ]
    }
    reversal[0].next = tail

    if (left === 1) {
        return reversal[ reversal.length - 1 ]
    }
    else {
        turning_point.next = reversal[ reversal.length - 1 ]

        return head
    }
};