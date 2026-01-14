import { Heap } from "@datastructures-js/heap"

type Project = { profit : number, capital : number }

function findMaximizedCapital(k: number, w: number, profits: number[], capitals: number[]): number {
    const projects = []

    for (let i = 0; i < profits.length; i++) projects.push({ profit : profits[ i ], capital : capitals[ i ]})

    const heap_by_capital: Heap<Project> = new Heap(
        (a, b) => a.capital - b.capital,
        projects
    )

    const heap_by_profit: Heap<Project> = new Heap(
        (a, b) => b.profit - a.profit
    )

    let remaining_projects = k
    let current_capital = w

    while (remaining_projects > 0 && (heap_by_capital.size() > 0 || heap_by_profit.size() > 0)) {
        while (heap_by_capital.size() > 0 && heap_by_capital.root().capital <= current_capital) {
            heap_by_profit.push(heap_by_capital.pop())
        }

        // no available projects? (not enough capitals for any of the projects)
        if (heap_by_profit.size() === 0) break

        const best_available_project = heap_by_profit.pop()

        current_capital += best_available_project.profit
        remaining_projects--
    }

    return current_capital
};