export const filter = <T>(arr: Array<T>, fn: (v: T, i: number, a: Array<T>) => boolean): Array<T> => {
    let i = -1;
    let ri = 0;
    const res = [];

    const len = !arr ? 0 : arr.length;

    while (++i < len) {
        const val = arr[i];
        if (fn(val, i, arr)) {
            res[ri++] = val;
        }
    }

    return res;
};
