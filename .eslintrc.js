module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:react/recommended', 'standard'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        indent: ['error', 4],
        semi: [2, 'always'],
        'multiline-ternary': ['off'],
        'no-useless-return': ['off'],
        'space-before-function-paren': ['error', 'always'],
        quotes: ['error', 'single', { allowTemplateLiterals: true }]
    }
};
