const path = require('path');

module.exports = {
  // entry: "../components", 
  stories: ["../components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-designs',
    '@storybook/addon-a11y',
    '@storybook/addon-knobs',
    '@storybook/preset-scss'
  ],
  //  framework: "@storybook/react",
  //  module: {
  //    rules: [
  //      {
  //        test: /\.scss$/,
  //        use: [
  //          {
  //            loader: "style-loader"
  //          },
  //          {
  //            loader: "css-loader"
  //          },
  //          {
  //            loader: "sass-loader",
  //            options: {
  //              javascriptEnabled: true
  //            }
  //          }
  //        ],
  //        include: path.resolve(__dirname, "../")
  //      }
  //    ]
  //  }
};
