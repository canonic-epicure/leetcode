import { MinHeap, MaxHeap } from "@datastructures-js/heap"

class MedianFinder {
    min_heap: MinHeap<number> = new MinHeap()
    max_heap: MaxHeap<number> = new MaxHeap()

    addNum(num: number): void {
        let min_size = this.min_heap.size()
        let max_size = this.max_heap.size()

        if (min_size === 0 && max_size === 0) {
            this.max_heap.push(num)
            max_size++
        }
        else if (max_size > 0 && num <= this.max_heap.root()) {
            this.max_heap.push(num)
            max_size++
        }
        else {
            this.min_heap.push(num)
            min_size++
        }

        if (max_size > min_size + 1) {
            this.min_heap.push(this.max_heap.pop())
        }
        else if (min_size > max_size + 1) {
            this.max_heap.push(this.min_heap.pop())
        }
    }

    findMedian(): number {
        const min_size = this.min_heap.size()
        const max_size = this.max_heap.size()

        if (min_size === 0 && max_size === 0) {
            throw new Error("Finder is empty")
        }
        else if (min_size === max_size) {
            return (this.min_heap.root() + this.max_heap.root()) / 2
        }
        else if (min_size > max_size) {
            return this.min_heap.root()
        }
        else {
            return this.max_heap.root()
        }
    }
}
