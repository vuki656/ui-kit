module.exports = {
    stories: [
        "../src/**/*.stories.tsx",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        'storybook-css-modules',
    ],
    framework: "@storybook/react",
    core: {
        builder: 'webpack5',
    },
    features: {
        babelModeV7: true,
    },
}
