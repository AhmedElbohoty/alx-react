module.exports = {
  root: true,
  env: { browser: true, es2023: true, 'jest/globals': true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module',
    jsx: true,
  },
  plugins: ['react', 'jest'],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
