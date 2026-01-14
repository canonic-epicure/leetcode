// Definition for _Node.
class _Node {
    val: boolean
    isLeaf: boolean
    topLeft: _Node | null
	topRight: _Node | null
	bottomLeft: _Node | null
	bottomRight: _Node | null
	constructor(val?: boolean, isLeaf?: boolean, topLeft?: _Node, topRight?: _Node, bottomLeft?: _Node, bottomRight?: _Node) {
        this.val = (val===undefined ? false : val)
        this.isLeaf = (isLeaf===undefined ? false : isLeaf)
        this.topLeft = (topLeft===undefined ? null : topLeft)
        this.topRight = (topRight===undefined ? null : topRight)
        this.bottomLeft = (bottomLeft===undefined ? null : bottomLeft)
        this.bottomRight = (bottomRight===undefined ? null : bottomRight)
  }
}


function construct(grid: number[][]): _Node | null {
    const do_construct = (grid: number[][], left: number, top: number, n: number) : _Node | null => {
        if (n === 1) {
            return new _Node(Boolean(grid[top][left]), true)
        } else {
            const half = n / 2

            const children = [
                do_construct(grid, left, top, half),
                do_construct(grid, left + half, top, half),
                do_construct(grid, left, top + half, half),
                do_construct(grid, left + half, top + half, half)
            ]

            if (children.every(child => child.isLeaf && child.val === children[0].val)) {
                return new _Node(children[0].val, true)
            }
            else {
                return new _Node(
                    false,
                    false,
                    ...children
                )
            }

        }
    }

    return do_construct(grid, 0, 0, grid.length)
};

