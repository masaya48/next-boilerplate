/** @type {import('knip').KnipConfig} */
export default {
  entry: ['.scaffdog/*'],
  project: ['app/**/*.(ts|tsx)'],
  ignoreDependencies: [
    // tailwindcss dependencies
    'postcss',

    // eslint
    '@typescript-eslint/eslint-plugin',
    'eslint-import-resolver-typescript',
    'eslint-plugin-import',
    'eslint-plugin-import-access',
    'eslint-plugin-storybook',
    'eslint-plugin-testing-library',
    'eslint-plugin-vitest',
  ],
  ignoreExportsUsedInFile: true,
};
