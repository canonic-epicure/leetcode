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

function partition(head: ListNode | null, x: number): ListNode | null {
    const partition = (head: ListNode | null, x: number, postponedHead : ListNode | null, postPonedTail : ListNode | null) : ListNode | null => {
        if (head === null) {
            return postponedHead
        }

        if (head.val < x) {
            head.next = partition(head.next, x, postponedHead, postPonedTail)

            return head
        }
        else {
            const next = head.next
            head.next = null

            if (!postponedHead) {
                postponedHead = head
            }
            else {
                postPonedTail.next = head
            }
            postPonedTail = head

            return partition(next, x, postponedHead, postPonedTail)
        }

    }

    return partition(head, x, null, null)
};