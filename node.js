module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "standard",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "no-console": ["warn", { allow: ["error"] }],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "typeAlias",
        format: ["PascalCase"],
      },
      {
        selector: "interface",
        format: ["PascalCase"],
      },
    ],
    "prettier/prettier": [
      "error",
      {
        arrowParens: "always",
        endOfLine: "auto",
        printWidth: 80,
        semi: false,
        singleAttributePerLine: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: "all",
      },
    ],
  },
  settings: {
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
    },
  },
};
