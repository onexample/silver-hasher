/**
 * Missed numbers from sequence;
 *
 *
 *
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
export const missing = (arr: Array<number>): Array<number> => {

    let mia= [],
        min= Math.min.apply(null, arr),
        max= Math.max.apply(null, arr);

    while(min<max){
        if(arr.indexOf(++min)== -1) {
            mia.push(min);
        }
    }

    return mia;

};
