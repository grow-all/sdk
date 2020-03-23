module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:node/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    "prettier/prettier": ["error", {
      "endOfLine":"auto"
    }],
    'semi': ['error', 'always'],
    'node/no-unsupported-features/es-syntax': 'off',
  },
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    'ecmaVersion': 2020,
  }
}
