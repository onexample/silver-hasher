export function reduce<T, U>(arr: T[], iter: (acc: U, item: T, index: number, arr: T[]) => U, acc?: U): U {
    let i = -1;

    const len = !arr ? 0 : arr.length;

    const initAcc = arguments.length < 3;

    if (len && initAcc) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        acc = arr[++i];
    }

    while (++i < len) {
        acc = iter(acc, arr[i], i, arr);
    }

    return acc;
}
