import globals from "globals";
import pluginJs from "@eslint/js";
import next from 'eslint-config-next';
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import";

/** @type {import('eslint').Linter.Config[]} */
export default [
  next,
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginImport.flatConfigs.recommended,
  {
    rules: {
      "react/react-in-jsx-scope": 0,
      "react/display-name": 0,
      "@typescript-eslint/explicit-function-return-type": 0,
      "@typescript-eslint/explicit-module-boundary-types": 0,
    },
    settings: {
      "import/resolver": {
        "typescript": {}
      },
      react: {
        version: "detect",
      },
    },
  },
];