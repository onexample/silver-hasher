module.exports = {
    extends: [
        'prettier',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended', // should be always last
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        // Allows for the parsing of modern ECMAScript features
        ecmaVersion: 2020,
        // Allows for the use of imports
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        'no-unused-vars': 'off',
        'no-useless-escape': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-this-alias': 'off',
    },
};
