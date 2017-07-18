export const indexOf = (arr: Array<number>, value: number): number => {

    const len = !arr? 0 : arr.length;

    for ( let i=0; i < len; i++ ) {

        if( arr[i] === value) {
            return i;
        }

    }

    return -1;

};


