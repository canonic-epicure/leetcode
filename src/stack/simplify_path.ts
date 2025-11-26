function simplifyPath(path: string): string {
    const parts = path.split(/\/+/)

    let target = 0

    for (let i = 0; i < parts.length; i++) {
        const part = parts[ i ]

        if (part === '.' || (part === '' && i !== 0)) {

        }
        else if (part === '..') {
            target--
            if (target < 1) target = 1
        }
        else {
            if (target !== i) parts[ target ] = part
            target++
        }
    }

    parts.length = target

    return parts.join('/')
};