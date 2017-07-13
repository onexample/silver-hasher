
export const isSorted = (arr: Array<number>): boolean => {
     return arr.every((item, i, a) => i > 0 ? a[i] > a[i - 1] : a[i] < a[i + 1]);
};
