module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["jest"],
  rules: {
    "import/prefer-default-export": "off",
    "max-len": "off",
    "no-param-reassign": "off",
    "import/no-cycle": "off",
    "no-plusplus": "off",
    "no-unused-expressions": "off",
    "no-use-before-define": "off",
    "no-continue": "off",
    "no-restricted-globals": "off",
  },
};
