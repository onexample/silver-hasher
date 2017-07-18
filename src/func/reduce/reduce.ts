export function reduce (arr, iter, acc?): any {

    let i = -1;

    const len = !arr ? 0 : arr.length;

    const initAcc = arguments.length < 3;

    if (len && initAcc) {
        acc=arr[++i];
    }

    while (++i < len) {
        acc = iter(acc, arr[i], i, arr)
    }

    return acc

}
