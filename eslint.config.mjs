// import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";


// export default [
//   { files: ["**/*.{js,mjs,cjs,ts}"] },
//   { languageOptions: { globals: globals.node } },
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
//   {
//     rules: {
//       semi: "error",
//       "prefer-const": "error",
//       "quotes": ["error", "double"],
//       "max-len": ["error", { "code": 120 }],
//       "comma-dangle": ["error", "always-multiline"],
//       "arrow-parens": ["error", "always"],
//       "indent": ["error", 2],
//       "object-curly-spacing": ["error", "always"],
//     },
//   },
// ];

// eslint.config.js
import stylisticTs from "@stylistic/eslint-plugin-ts"
import parserTs from "@typescript-eslint/parser"

export default [
  {
    plugins: {
      "@stylistic/ts": stylisticTs,
    },
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { parser: parserTs },
    rules: {

      "@stylistic/ts/indent": ["error", 2],
      "@stylistic/ts/quotes": ["error", "double"],
      "@stylistic/ts/comma-dangle": ["error", "always-multiline"],
      "@stylistic/ts/object-curly-spacing": ["error", "always"],
      "@stylistic/ts/semi": ["error", "never"],
    },
  },
]