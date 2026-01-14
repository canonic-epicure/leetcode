class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


class BSTIterator {
    root : TreeNode | null

    stack : TreeNode[]
    state: ('left' | 'root' | 'right')[]

    constructor(root: TreeNode | null) {
        this.root = root

        this.stack = [ root ]
        this.state = [ 'left' ]
    }

    next(): number {
        const current = this.stack[ this.stack.length - 1 ]
        const current_state = this.state[ this.state.length - 1 ]

        if (current_state === 'left') {
            this.state[ this.state.length - 1 ] = 'root'

            if (current.left) {
                this.stack.push(current.left)
                this.state.push('left')
            }

            return this.next()
        }
        else if (current_state === 'root') {
            this.state[ this.state.length - 1 ] = 'right'

            return current.val
        } else if (current_state === 'right') {
            this.stack.pop()
            this.state.pop()

            if (current.right) {
                this.stack.push(current.right)
                this.state.push('left')
            }

            return this.next()
        }
    }

    hasNext(): boolean {
        if (this.stack.length === 0) return false

        for (let i = this.stack.length - 1; i >= 0; i--) {
            const current = this.stack[ i ]
            const current_state = this.state[ i ]

            if (current_state === 'left')
                return true
            else if (current_state === 'root')
                return true
            else if (current_state === 'right' && Boolean(current.right))
                return true
        }

        return false
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

