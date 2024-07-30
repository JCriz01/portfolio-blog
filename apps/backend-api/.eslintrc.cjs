/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/index.js"],
  rules: {
    "@typescript-eslint/no-var-requires": "off",
  },
  parserOptions: {
    sourceType: "script",
  },
};
