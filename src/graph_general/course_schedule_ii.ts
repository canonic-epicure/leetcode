function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const graph: Map<number, Set<number>> = new Map()

    prerequisites.forEach(([a, b]) => {
        let from = graph.get(b)

        if (!from) {
            from = new Set<number>()

            graph.set(b, from)
        }

        from.add(a)
    })

    const ordering: number[] = []

    const visited: Set<number> = new Set()

    const dfs = (from: number, vis: Set<number>): boolean => {
        if (visited.has(from)) return true

        if (vis.has(from)) {
            return false
        }

        vis.add(from)

        const tos = graph.get(from)

        if (tos) {
            for (const to of tos) {
                if (dfs(to, vis) === false) return false
            }
        }
        visited.add(from)

        ordering.push(from)

        return true
    }

    for (let i = 0; i < numCourses; i++) {
        if (visited.has(i)) continue

        if (dfs(i, new Set()) === false) return []
    }

    return ordering.reverse()
};

console.log(
    findOrder(4, [[1,0],[2,0],[3,1],[3,2]])
)