export const permute = (str: string): Array<string> => {

    if (str.length === 0) {
        return [];
    }

    if (str.length === 1) {
        return [str]
    }

    let permutations = [];

    str.split('').forEach((char, index)=>{

        let remainingString = str.slice(0,index) + str.slice(index+1,str.length);

        for (let subPermutation of permute(remainingString)) {
            permutations.push(char + subPermutation)
        }

    });

    return permutations;
};

