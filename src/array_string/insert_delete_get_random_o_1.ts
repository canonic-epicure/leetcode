class RandomizedSet {
    map : Map<number, number> = new Map()

    map_values : {value: number, idx: number}[] = []


    insert(value: number): boolean {
        const has = this.map.has(value)

        if (!has) {
            const idx = this.map_values.length

            this.map.set(value, idx)
            this.map_values[ idx ] = { value, idx }
        }

        return !has
    }

    remove(value: number): boolean {
        const has = this.map.has(value)

        if (has) {
            const idx = this.map.get(value)

            this.map.delete(value)

            const map_values = this.map_values

            if (idx !== map_values.length - 1) {
                const last_el = map_values[ map_values.length - 1 ]

                map_values[ idx ] = map_values[ map_values.length - 1 ]

                this.map.set(last_el.value, idx)
            }

            map_values.length--
        }

        return has
    }

    getRandom(): number {
        const rand_idx = Math.floor(Math.random() * this.map.size)

        return this.map_values[ rand_idx ].value
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */