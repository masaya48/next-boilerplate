const js = require('@eslint/js');
const eslintConfigPrettier = require('eslint-config-prettier');
const { FlatCompat } = require('@eslint/eslintrc');
const unusedImportsPlugin = require('eslint-plugin-unused-imports');
const tsEslintParser = require('@typescript-eslint/parser');
const nextPlugin = require('@next/eslint-plugin-next');
const playwrightPlugin = require('eslint-plugin-playwright');

const compat = new FlatCompat();

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
  {
    ignores: [
      '.next/*',
      'node_modules/*',
      'dist/*',
      'storybook-static/*',
      '.storybook/*',
      'app/_generated/*',
      '*.{js,ts,mjs}',
      '.scaffdog/*',
      'tests/*',
    ],
  },
  js.configs.recommended,
  eslintConfigPrettier,
  ...compat.extends(
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier',
    'plugin:storybook/recommended',
    'plugin:testing-library/react',
    'plugin:import/recommended',
    'plugin:vitest/recommended'
  ),
  {
    plugins: {
      'unused-imports': unusedImportsPlugin,
      '@next/next': nextPlugin,
    },
    languageOptions: {
      parser: tsEslintParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      complexity: ['error', 10],
      'no-process-env': 'error',
      'eol-last': 'error',
      // unused-imports
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      // off にするルール
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react/display-name': 'off',

      // extends に追加でエラーにするルール
      'arrow-body-style': ['error', 'as-needed'],
      'no-duplicate-imports': 'error',
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  },
  {
    ...playwrightPlugin.configs['flat/recommended'],
    files: ['tests/*'],
  },
];
