class MyListNode {
    val: number
    next: MyListNode | null
    prev: MyListNode | null

    constructor(val?: number, next?: MyListNode | null, prev?: MyListNode | null) {
        this.val = val ?? 0
        this.next = next ?? null
        this.prev = prev ?? null
    }
}

class LRUCache {
    map : Map<number, number> = new Map()

    usage_map : Map<number, MyListNode> = new Map()

    head : MyListNode = null
    tail : MyListNode = null

    capacity : number = 0

    constructor(capacity: number) {
        this.capacity = capacity
    }

    touch(key: number) {
        let usage_node = this.usage_map.get(key)

        if (usage_node === this.tail) return

        if (usage_node === undefined) {
            usage_node = new MyListNode(key)

            this.usage_map.set(key, usage_node)

            if (!this.head) {
                this.head = this.tail = usage_node
            }
            else {
                this.tail.next = usage_node
                usage_node.prev = this.tail
                this.tail = usage_node

                if (this.map.size > this.capacity) {
                    this.delete(this.head.val)
                }
            }
        } else {
            this.extract(usage_node)

            this.tail.next = usage_node
            usage_node.prev = this.tail
            usage_node.next = null
            this.tail = usage_node
        }
    }


    extract (usage_node: MyListNode) {
        if (usage_node === this.head) {
            this.head = this.head.next

            if (this.head)
                this.head.prev = null
        }
        else if (usage_node === this.tail) {
            this.tail = this.tail.prev

            if (this.tail)
                this.tail.next = null
        }
        else {
            usage_node.prev.next = usage_node.next
            usage_node.next.prev = usage_node.prev
        }
    }


    delete (key: number) {
        this.map.delete(key)

        const usage_node = this.usage_map.get(key)
        this.usage_map.delete(key)

        this.extract(usage_node)
    }

    get(key: number): number {
        const res = this.map.get(key) ?? -1

        if (res !== -1) this.touch(key)

        return res
    }

    put(key: number, value: number): void {
        this.map.set(key, value)

        this.touch(key)
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

export {}

const lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
console.log(lRUCache.get(1));    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(lRUCache.get(2));    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(lRUCache.get(1));    // return -1 (not found)
console.log(lRUCache.get(3));    // return 3
console.log(lRUCache.get(4));    // return 4