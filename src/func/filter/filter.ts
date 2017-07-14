export const filter = (arr: Array<any>, fn:(v:any, i: number, a: Array<any>) => boolean): Array<any> => {

    let i = -1,
        ri = 0,
        res = [];

    const len = !arr ? 0: arr.length;

    while (++i < len) {
        let val = arr[i];
        if(fn(val, i, arr)) {
            res[ri++]=val;
        }
    }

    return res;
};
