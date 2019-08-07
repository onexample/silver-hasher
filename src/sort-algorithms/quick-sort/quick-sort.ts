export const quickSort = (arr: number[]) => {
    const len = arr.length;
    if (len < 2) {
        return arr;
    }
    const pivot = arr[Math.floor(Math.random() * len)];
    const left = arr.filter(el => el < pivot);
    const right = arr.filter(el => el > pivot);
    return [...quickSort(left), pivot, ...quickSort(right)];

}