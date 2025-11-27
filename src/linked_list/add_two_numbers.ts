/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function doAddTwoNumbers(l1: ListNode | null, l2: ListNode | null, extra : number = 0): ListNode | null {
    if (!l1 && !l2) {
        if (extra > 0)
            return new ListNode(extra)
        else
            return null
    }

    const digit = (l1?.val ?? 0) + (l2?.val ?? 0) + extra

    return new ListNode(
        digit % 10,
        doAddTwoNumbers(l1?.next, l2?.next, (digit - (digit % 10)) / 10)
    )
};

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    return doAddTwoNumbers(l1, l2)
};
