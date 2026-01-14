class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function sortList(head: ListNode | null): ListNode | null {
    const do_sort_list = (head: ListNode | null) : [ ListNode | null, ListNode | null ] => {
        if (head === null) return [ null, null ]
        if (head.next === null) return [ head, head ]

        const [ next_sorted_head, next_sorted_tail ] = do_sort_list(head.next)

        if (head.val <= next_sorted_head.val) {
            head.next = next_sorted_head
            return [ head, next_sorted_tail ]
        }
        else {
            if (next_sorted_tail.val <= head.val) {
                next_sorted_tail.next = head
                head.next = null

                return [ next_sorted_head, head ]
            }
            else {
                let node = next_sorted_head

                while (node && head.val >= node.next.val) {
                    node = node.next
                }

                head.next = node.next
                node.next = head

                return [ next_sorted_head, next_sorted_tail ]
            }
        }
    }

    return do_sort_list(head)[ 0 ]
};


