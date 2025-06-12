import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: [tseslint.configs.recommended, js.configs.recommended],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      project: ["./tsconfig.json"],
    },
    plugins: ["@angular-eslint"],
    extends: [
      "plugin:@typescript-eslint/recommended",
      "eslint:recommended",
      "plugin:@angular-eslint/recommended",
      "plugin:@angular-eslint/template/recommended",
    ],
    rules: {
      "no-unused-vars": "error",
      "no-console": "warn",
      eqeqeq: "error",
      indent: ["error", 2],
      quotes: ["error", "single"],
      semi: ["error", "always"],
      "@angular-eslint/component-class-suffix": "error",
      "@angular-eslint/directive-class-suffix": "error",
      "@angular-eslint/no-input-rename": "warn",
      "@angular-eslint/no-output-rename": "warn",
      "@angular-eslint/template/prefer-self-closing-tags": "warn",
      "@angular-eslint/template/no-duplicate-attributes": "warn",
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "kebab-case",
          prefix: "app",
          style: "element",
        },
      ],
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
    },
  },
  tseslint.configs.recommended,
]);
