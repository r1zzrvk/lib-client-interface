const fs = require('fs')

const eslintConfig = {
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['src/pages/**/*'],
      rules: {
        'import/no-default-export': 0,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
    project: './tsconfig.json',
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier/react',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:testing-library/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'plugin:clean-regex/recommended',
  ],
  plugins: ['prettier', 'react', '@typescript-eslint', 'import', 'testing-library', 'jest-dom', 'clean-regex'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/display-name': 0,
    'react/prop-types': 0,
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-alert': 'error',
    'no-else-return': 1,
    'no-cond-assign': 'error',
    'no-lonely-if': 'warn',
    'no-dupe-else-if': 'warn',
    'no-duplicate-case': 'warn',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-key': ['warn', { checkFragmentShorthand: true }],
    'react/jsx-no-duplicate-props': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/require-default-props': 'off',
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-shadow': 'off',
    'max-lines-per-function': ['warn', 250],
    'import/no-default-export': 'warn',
    'react/jsx-handler-names': ['warn'],
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    '@typescript-eslint/no-unused-expressions': ['error'],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      },
      {
        selector: 'property',
        format: ['camelCase', 'PascalCase', 'snake_case'],
      },
      {
        selector: 'memberLike',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        prefix: ['T'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        prefix: ['I'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['PascalCase', 'UPPER_CASE'],
      },
    ],
    curly: 'error',
  },
}

module.exports = fs.existsSync('./custom_eslintrc.js')
  ? { ...eslintConfig, ...require('./custom_eslintrs.js') }
  : eslintConfig
