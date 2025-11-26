class MinStack {
    stack : number[] = []
    mins : number[] = []

    push(val: number): void {
        this.stack.push(val)

        if (this.mins.length > 0)
            this.mins.push(Math.min(this.mins[this.mins.length - 1], val))
        else
            this.mins.push(val)
    }

    pop(): void {
        this.stack.pop()
        this.mins.pop()
    }

    top(): number {
        return this.stack[ this.stack.length - 1 ]
    }

    getMin(): number {
        return this.mins[ this.mins.length - 1 ]
    }
}