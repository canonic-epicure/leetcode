function dailyTemperatures(temperatures: number[]): number[] {
    const answers: number[] = new Array(temperatures.length).fill(0)
    const next_higher_temps: number[] = new Array(temperatures.length).fill(-1)

    for (let i = temperatures.length - 2; i >= 0; i--) {
        const temp  = temperatures[ i ]
        let next_at = i + 1

        while (next_at !== -1 && temp >= temperatures[ next_at ]) {
            next_at = next_higher_temps[ next_at ]
        }

        next_higher_temps[ i ] = next_at
        answers[ i ] = next_at === -1 ? 0 : next_at - i
    }

    return answers
};