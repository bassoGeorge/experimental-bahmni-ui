const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    library: "BahmniNextUI",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: [
          "style-loader",
          "css-loader",
          // {
          //   loader: "postcss-loader",
          //   options: {
          //     postcssOptions: {
          //       plugins: {
          //         "postcss-prefix-selector": {
          //           prefix: ".bahmni-scoped",
          //           exclude: [":root", "html", "body"],
          //         },
          //       },
          //     },
          //   },
          // },
        ],
      },
    ],
  },
  externals: {
    react: "react", // Exclude react from the bundled output
    "react-dom": "react-dom", // Exclude react-dom from the bundled output
  },
};
