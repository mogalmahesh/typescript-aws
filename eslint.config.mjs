import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      semi: "error",
      "prefer-const": "error",
      "quotes": ["error", "double"],
      "max-len": ["error", { "code": 80 }],
      "comma-dangle": ["error", "always-multiline"],
      "arrow-parens": ["error", "always"],
      "indent": ["error", 2],
    },
  },
];