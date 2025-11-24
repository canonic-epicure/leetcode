function spiralOrder(matrix: number[][]): number[] {
    let bound_left = 0
    let bound_right = matrix[0].length - 1
    let bound_top = 0
    let bound_bottom = matrix.length - 1

    let direction : 'right' | 'bottom' | 'left' | 'top' = 'right'

    let x = 0
    let y = 0

    const can_right = () : boolean => x + 1 <= bound_right
    const can_left = () : boolean => x - 1 >= bound_left
    const can_top = () : boolean => y - 1 >= bound_top
    const can_bottom = () : boolean => y + 1 <= bound_bottom

    const res: number[] = []

    do {
        res.push(matrix[y][x])

        if (direction === 'right') {
            if (can_right())
                x++
            else {
                bound_top++
                if (!can_bottom())
                    break
                else {
                    direction = 'bottom'
                    y++
                }
            }
        }
        else if (direction === 'bottom') {
            if (can_bottom())
                y++
            else {
                bound_right--
                if (!can_left())
                    break
                else {
                    direction = 'left'
                    x--
                }
            }
        }
        else if (direction === 'left') {
            if (can_left())
                x--
            else {
                bound_bottom--
                if (!can_top())
                    break
                else {
                    direction = 'top'
                    y--
                }
            }
        }
        else if (direction === 'top') {
            if (can_top())
                y--
            else {
                bound_left++
                if (!can_right())
                    break
                else {
                    direction = 'right'
                    x++
                }
            }
        }
    } while (true)

    return res
};

console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))