module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    // "@storybook/addon-links",
    // "@storybook/addon-essentials",
    // "@storybook/addon-interactions"
    {
      name: "@storybook/addon-styling",
      options: {
        sass: {
          implementation: require("node-sass"),
        },
      },
    },
  ],
  framework: "@storybook/react",
};
