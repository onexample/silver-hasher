export const selectionSort = (arr: number[]) => {

    const len = arr.length;
    let temp: number;

    for (let i = 0; i < len; i++) {
        let mi = i;

        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[mi])
                mi = j;
        }

        temp = arr[i];
        arr[i] = arr[mi];
        arr[mi] = temp;
    }

    return arr;
}