import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      js,
      prettier,
    },
    extends: ['js/recommended'],
    languageOptions: {
      sourceType: 'module',
      globals: globals.node,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',

      // 👇 Prettier rule
      'prettier/prettier': 'warn',
    },
  },
]);
