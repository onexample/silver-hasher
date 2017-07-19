
export const isBalanced = (str: string): boolean => {

    let stack = [];

    const opening = new RegExp(/\{|\[|\(|\</);
    const closing = new RegExp(/\}|\]|\)|\>/);

    const len = str.length;

    for (let i = 0; i < len; i++) {

        if( opening.test(str[i]) ) {
            stack.push(str[i]);
        }
        if( closing.test(str[i]) && !stack.pop()) {
            return false;
        }
    }

    return !stack.length;

};
