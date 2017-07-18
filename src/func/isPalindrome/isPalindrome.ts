
export const isPalindrome = (str: string): boolean => {

    //make string lower case and remove spaces
    let tmp=str.replace(/[^A-Z0-9]/ig, '').toLowerCase();

    //reverse the clear lower case string
    let checkPalindrome = tmp.split('').reverse().join('');

    return tmp === checkPalindrome
};

