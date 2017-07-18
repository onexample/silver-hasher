export const reverse = (str: string): string => {

    let result: string = '';

    let len: number = str.length;

    while ( len > 0 ) {
        result += str.substring(len-1, len);
        len--;
    }

    /**
     * Also here is another cheating way like this
     *
     * return str.split('').reverse().join('')
     *
     */
    return result;

};

