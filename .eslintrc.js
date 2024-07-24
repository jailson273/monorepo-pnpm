module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json', './package.json'],
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    extraFileExtensions: ['.json']
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  extends: [
    'next/babel',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  root: true,
  env: {
    node: true,
    jest: true
  },
  ignorePatterns: [
    '.eslintrc.js',
    'package.*',
    'tsconfig.*',
    'nest-cli.json',
    'dist/',
    'node_module/'
  ],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'lf'
      }
    ]
  }
}
