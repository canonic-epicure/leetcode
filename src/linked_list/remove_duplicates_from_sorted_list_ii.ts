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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    const delete_leading = (head : ListNode | null, val: number) : ListNode | null => {
        let node = head

        while (node && node.val === val) {
            node = node.next
        }

        return node
    }

    const do_delete_leading = (head : ListNode | null) : ListNode | null => {
        if (!head) return null

        if (!head.next) return head

        if (head.val === head.next.val) {
            return do_delete_leading(delete_leading(head, head.val))
        }
        else {
            head.next = do_delete_leading(head.next)

            return head
        }
    }

    return do_delete_leading(head)
};