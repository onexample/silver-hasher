export const radixSort = (arr: number[]) => {
    const getMaxDigit = (arr: number[]) => {
        let max = 0;
        for (const x of arr) {
            const localMax = Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
            max = max < localMax ? localMax : max;
        }
        return max;
    };

    const getValueInPosition = (target: number, digit: number) =>
        Math.floor(Math.abs(target) / Math.pow(10, digit)) % 10;

    const max = getMaxDigit(arr);

    for (let i = 0; i < max; i++) {
        const buckets = Array.from({ length: 10 }, () => []);

        for (let j = 0; j < arr.length; j++) {
            const index = getValueInPosition(arr[j], i);
            buckets[index].push(arr[j]);
        }
        arr = [].concat(...buckets);
    }

    return arr;
};
