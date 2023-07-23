const path = require('path')

const resolvePath = (currentPath) => path.resolve(__dirname, currentPath)

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'eslint-plugin-import'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@Assets', resolvePath('src/assets/')],
          ['@Components', resolvePath('src/components/')],
          ['@Layouts', resolvePath('src/layouts/')],
          ['@Pages', resolvePath('src/pages/')],
          ['@Store', resolvePath('src/store/')],
          ['@Utils', resolvePath('src/utils/')],
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 'off',
  },
}
