function calcEquation(equations: [string, string][], values: number[], queries: [string, string][]): number[] {
    const graph: Map<string, Map<string, number>> = new Map()

    const add_edge = (from: string, to: string, value: number) => {
        let from_edges = graph.get(from)

        if (!from_edges) {
            from_edges = new Map()
            graph.set(from, from_edges)
        }

        from_edges.set(to, value)
    }

    equations.forEach(([a, b], i) => {
        add_edge(a, b, values[i])
        add_edge(b, a, 1 / values[i])
    })

    const dfs = (from: string, to: string, path: number, visited: Set<string>) => {
        if (from === to) return 1

        if (visited.has(from)) return null

        visited.add(from)

        const from_edges = graph.get(from)
        const direct = from_edges.get(to)

        if (direct !== undefined)
            return path === null ? direct : path * direct

        for (const [ intermediate, value ] of from_edges.entries()) {
            const route = dfs(intermediate, to, path === null ? value : path * value, visited)

            if (route !== null) {
                return route
            }
        }

        return null
    }

    return queries.map(([a, b]) => {
        if (!graph.get(a) || !graph.get(b)) return -1

        return dfs(a, b, null, new Set()) ?? -1
    })
};


console.log(
    calcEquation(
        [["a","b"],["b","c"],["c","d"],["d","e"]],
        [2.0,3.0,4.0,5.0],
        [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"],["c","e"]]
    )
)