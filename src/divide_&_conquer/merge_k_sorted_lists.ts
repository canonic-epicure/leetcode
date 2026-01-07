class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1 && !list2) return null

    if (!list1) return list2
    if (!list2) return list1

    if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)

        return list1
    }
    else {
        list2.next = mergeTwoLists(list2.next, list1)

        return list2
    }
};

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (lists.length === 0) return null
    if (lists.length === 1) return lists[0]

    const merge_pairs = (lists: Array<ListNode | null>): Array<ListNode | null> => {
        const res: Array<ListNode | null> = []

        for (let i = 0; i < lists.length; i += 2) {
            if (i + 1 < lists.length) {
                res.push(mergeTwoLists(lists[ i ], lists[ i + 1 ]))
            }
            else {
                res.push(lists[ i ])
            }
        }

        return res
    }

    let res: Array<ListNode | null> = lists

    while (res.length > 1) {
        res = merge_pairs(res)
    }

    return res[0]
};

export {}