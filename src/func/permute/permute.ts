export const permute = (str: string): Array<string> => {
    if (str.length === 0) {
        return [];
    }

    if (str.length === 1) {
        return [str];
    }

    const permutations = [];

    str.split('').forEach((char, index) => {
        const remainingString = str.slice(0, index) + str.slice(index + 1, str.length);

        for (const subPermutation of permute(remainingString)) {
            permutations.push(char + subPermutation);
        }
    });

    return permutations;
};
