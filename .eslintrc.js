const os = require("os");

module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: "airbnb",
  ignorePatterns: ["node_modules/", "build/"],
  parser: "@babel/eslint-parser",
  plugins: ["react"],
  rules: {
    quotes: 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/href-no-hash": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "no-console": 0,
    "no-underscore-dangle": 0,
    "react/destructuring-assignment": 0,
    "react/function-component-definition": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-no-useless-fragment": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-wrap-multilines": 0,
    "linebreak-style": 0,
    "import/prefer-default-export": 0,
    "operator-linebreak": 0,
  },
};
