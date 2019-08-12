export const insertionSort = (arr: number[]) => {
    const sortedArr = [...arr];
    const len = sortedArr.length;

    for(let i = 1; i < len; i++) {
        for(let j = 0; j < i; j++) {
            if(sortedArr[i] < sortedArr[j]) {
                const [spliced] = sortedArr.splice(i,1);
                sortedArr.splice(j, 0, spliced);
            }
        }
    }

    return sortedArr;
}