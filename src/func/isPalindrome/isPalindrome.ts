export const isPalindrome = (str: string): boolean => {
    //make string lower case and remove spaces
    const tmp = str.replace(/[^A-Z0-9]/gi, '').toLowerCase();

    //reverse the clear lower case string
    const checkPalindrome = tmp.split('').reverse().join('');

    return tmp === checkPalindrome;
};
