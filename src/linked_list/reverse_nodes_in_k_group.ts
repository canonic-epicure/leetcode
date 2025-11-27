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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (k === 1) return head

    let node = head

    const reversal: ListNode[] = []

    let new_top: ListNode = null
    let interim_top: ListNode = null

    let counter = 0

    while (node) {
        reversal.push(node)

        node = node.next

        if (reversal.length === k) {
            for (let i = k - 1; i > 0; i--) {
                reversal[ i ].next = reversal[ i - 1 ]
            }

            if (counter === 0) {
                new_top = reversal[ k - 1 ]
            }
            else {
                if (interim_top) interim_top.next = reversal[ k - 1 ]
            }
            interim_top = reversal[ 0 ]

            reversal[ 0 ].next = node
            counter++

            reversal.length = 0
        }
    }

    return new_top ?? head
};