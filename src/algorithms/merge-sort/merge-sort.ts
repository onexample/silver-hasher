export const mergeSort = (arr: number[]): number[] => {
    const len = arr.length;

    if (len < 2) {
        return arr;
    }

    const middle = Math.floor(len / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    const merge = (leftBucket: number[], rightBucket: number[]) => {
        let li = 0;
        let ri = 0;
        const resultArr = [];

        while (li < leftBucket.length && ri < rightBucket.length) {
            if (leftBucket[li] < rightBucket[ri]) {
                resultArr.push(leftBucket[li]);
                li += 1;
            } else {
                resultArr.push(rightBucket[ri]);
                ri += 1;
            }
        }
        return [...resultArr, ...leftBucket.slice(li), ...rightBucket.slice(ri)];
    };

    return merge(mergeSort(left), mergeSort(right));
};
