module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  rules: {
    "no-debugger": "warn",
    "no-unused-vars": "warn",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/semi": "off",
    semi: "off",
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "multiline-ternary": "off",
    "no-extra-boolean-cast": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-invalid-void-type": "off",
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: ["parameter"],
        format: ["snake_case", "camelCase"],
      },
    ],
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "standard-with-typescript",
  ],
};
