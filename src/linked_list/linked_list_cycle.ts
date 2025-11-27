/**
 * Definition for singly-linked list.
 */

interface ListNode {
    val: number
    next: ListNode | null
}

function hasCycle(head: ListNode | null): boolean {
    if (head === null) return false

    const seen = new Set<ListNode>([head])

    while (head.next) {
        if (seen.has(head.next)) return true
        seen.add(head.next)

        head = head.next
    }

    return false
};