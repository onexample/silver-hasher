/**
 *
 * Return an array that contains those elements of arr1 that are also in arr2.
 *
 * Example:
 *
 *      let a1 = [1, 2, 4];
 *      let a2 = [1, 3, 4, 5];
 *      let res = intersection(a1, a2) // [1, 4]
 *
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>}
 */

export const intersection = (arr1: Array<any>, arr2: Array<any> ): Array<any> => {
    const s = new Set(arr2);
    return arr1.filter(x => s.has(x))
};

