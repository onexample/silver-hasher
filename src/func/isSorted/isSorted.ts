export const isSorted = (arr: Array<number>): boolean => {
    const d = Number(arr[0] < arr[1]);
    return arr.every((e, i, a) => i === 0 || !(Number(a[i] > a[i - 1]) ^ d));
};
