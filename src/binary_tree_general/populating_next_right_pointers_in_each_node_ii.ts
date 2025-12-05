class _Node {
    val: number
    left: _Node | null
    right: _Node | null
    next: _Node | null

    constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
        this.next = (next===undefined ? null : next)
    }

    forEach(func: (a: _Node, level : number) => any, level : number = 0) {
        func(this, level)
        this.left?.forEach(func, level + 1)
        this.right?.forEach(func, level + 1)
    }
}

// const root = new _Node(
//     1,
//     new _Node(
//         2,
//         new _Node(
//             4,
//             new _Node(
//                 7,
//             ),
//         ),
//         new _Node(
//             5,
//         )
//     ),
//     new _Node(
//         3,
//         null,
//         new _Node(
//             6,
//             null,
//             new _Node(
//                 8,
//             )
//         )
//     )
// )

// const root = new _Node(
//     0,
//     new _Node(
//         2,
//         new _Node(
//             1,
//             new _Node(
//                 5,
//             ),
//             new _Node(
//                 11,
//             ),
//         )
//     ),
//     new _Node(
//         4,
//         new _Node(
//             3,
//             null,
//             new _Node(
//                 6,
//             )
//         ),
//         new _Node(
//             -1,
//             null,
//             new _Node(
//                 8,
//             )
//         )
//     )
// )

// const root = new _Node(
//     1,
//     new _Node(
//         2,
//         new _Node(
//             3,
//             new _Node(
//                 4,
//                 new _Node(
//                     5,
//                 ),
//             ),
//         )
//     ),
//     new _Node(
//         20,
//         null,
//         new _Node(
//             30,
//             null,
//             new _Node(
//                 40,
//                 null,
//                 new _Node(
//                     50,
//                 )
//             )
//         )
//     )
// )

// const root = new _Node(
//     22,
//     new _Node(
//         11,
//         new _Node(
//             10,
//             new _Node(
//                 2,
//             ),
//         ),
//         new _Node(
//             7,
//             new _Node(
//                 1,
//             ),
//             new _Node(
//                 0,
//                 null,
//                 new _Node(
//                     7,
//                 )
//             ),
//         )
//     ),
//     new _Node(
//         3,
//         new _Node(
//             9
//         ),
//         new _Node(
//             1,
//             new _Node(
//                 8,
//             ),
//             new _Node(
//                 80,
//             )
//         )
//     )
// )

// const root = new _Node(
//     5,
//     new _Node(
//         0,
//         new _Node(
//             -1,
//             new _Node(
//                 7,
//                 null,
//                 new _Node(
//                     9,
//                 ),
//             ),
//         ),
//         new _Node(
//             -6,
//             new _Node(
//                 1,
//             ),
//             new _Node(
//                 3,
//                 new _Node(
//                     6,
//                 ),
//                 new _Node(
//                     0,
//                 ),
//             ),
//         )
//     ),
//     new _Node(
//         -4,
//         new _Node(
//             -9,
//             null,
//             new _Node(
//                 0,
//                 null,
//                 new _Node(
//                     -7,
//                     new _Node(
//                         -4,
//                         new _Node(
//                             1,
//                             null,
//                             new _Node(
//                                 -4,
//                             )
//                         ),
//                     ),
//                 )
//             )
//         )
//     )
// )


const root = new _Node(
    -2,
    new _Node(
        -9,
        new _Node(
            3,
            new _Node(
                5,
                new _Node(
                    -6,
                ),
            ),
            new _Node(
                2,
            ),
        ),
        new _Node(
            5,
        )
    ),
    new _Node(
        0,
        new _Node(
            -1,
            new _Node(
                -3,
                new _Node(
                    -1,
                ),
            ),
        ),
        new _Node(
            9,
            new _Node(
                -7,
            ),
            new _Node(
                6,
                new _Node(
                    -9,
                    new _Node(
                        8
                    ),
                ),
                new _Node(
                    9,
                    new _Node(
                        -2,
                    ),
                    new _Node(
                        5,
                    ),
                )
            )
        )
    )
)


function connect(root: _Node | null): _Node | null {

    function next(root: _Node | null): _Node | null {
        if (!root) return null

        return root.left ?? root.right ?? next(root.next)
    }

    function do_connect(root: _Node | null) {
        if (!root) return

        if (root.left) {
            if (root.right) {
                root.left.next = root.right
                root.right.next = next(root.next)
            }
            else
                root.left.next = next(root.next)
        }
        else if (root.right) {
            root.right.next = next(root.next)
        }

        do_connect(root.right)
        do_connect(root.left)
    }

    do_connect(root)

    return root
};

connect(root)

root.forEach((node, level) => {
    console.log(`Level: ${ level }, Node: ${ node.val }, next: ${ node.next?.val }`)
})

export {}