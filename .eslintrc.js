module.exports = {
    extends: [
        require.resolve('@rimac-technology/style-guide/eslint/core'),
        require.resolve('@rimac-technology/style-guide/eslint/react')
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    ignorePatterns: [
        "**/node_modules",
        ".eslintrc.js",
        "babel.config.js",
        "rollup.config.js",
        "storybook-static",
        "lib",
    ],
}
