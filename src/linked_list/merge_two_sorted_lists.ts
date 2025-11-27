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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1 && !list2) return null

    if (!list1) return list2
    if (!list2) return list1

    if (list1.val <= list2.val) {
        const list1_next = list1.next

        list1.next = mergeTwoLists(list1_next, list2)

        return list1
    }
    else {
        const list2_next = list2.next

        list2.next = mergeTwoLists(list2_next, list1)

        return list2
    }
};