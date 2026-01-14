type Comparator<T> = (a: T, b: T) => number

// parent(i) = (i - 1) // 2
// left(i) = 2*i + 1
// right(i) = 2*i + 2

class HeapBinary<T> {
    cmp: Comparator<T> = null
    data: T[] = []

    constructor (comparator: Comparator<T>, source?: T[]) {
        this.cmp = comparator

        if (source) this.heapify(source)
    }

    get size(): number {
        return this.data.length
    }

    peek (): T | undefined {
        return this.data[ 0 ]
    }

    push (a: T) {
        this.data.push(a)

        this.siftUp(this.data.length - 1)
    }

    pop (): T | undefined {
        const data = this.data

        if (data.length === 0) return undefined
        if (data.length === 1) return data.pop()

        const res = data[ 0 ]
        data[ 0 ] = data.pop()

        this.siftDown(0)

        return res
    }

    siftUp (pos: number) {
        while (pos > 0) {
            const parent = (pos - 1) >> 1

            if (this.cmp(this.data[ pos ], this.data[ parent ]) >= 0) break

            this.swap(pos, parent)
            pos = parent
        }
    }


    siftDown (pos: number) {
        const data = this.data
        const len = data.length

        while (true) {
            const left = 2 * pos + 1
            if (left >= len) break

            const right = 2 * pos + 2

            const best = right < len
                ? this.cmp(data[ left ], data[ right ]) < 0 ? left : right
                : left

            if (this.cmp(data[ pos ], data[ best ]) <= 0) break

            this.swap(best, pos)
            pos = best
        }
    }

    heapify (source: T[]) {
        this.data = source

        for (let i = (source.length - 2) >> 1; i >= 0; i--) {
            this.siftDown(i)
        }
    }

    swap (i1: number, i2: number) {
        const tmp = this.data[ i1 ]
        this.data[ i1 ] = this.data[ i2 ]
        this.data[ i2 ] = tmp
    }
}

function findKthLargest(nums: number[], k: number): number {
    const heap = new HeapBinary(
        (a, b) => b - a,
        nums
    )

    let res = heap.pop()

    for (let i = 2; i <= k; i++) res = heap.pop()

    return res
};

console.log(
    findKthLargest([3,2,1,5,6,4], 2)
)

