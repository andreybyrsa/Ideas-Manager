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
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'eslint-plugin-react',
    'eslint-plugin-import',
    'eslint-plugin-prettier',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@Assets', resolvePath('src/assets/')],
          ['@Components', resolvePath('src/components/')],
          ['@Layouts', resolvePath('src/layouts/')],
          ['@Pages', resolvePath('src/pages/')],
          ['@Hooks', resolvePath('src/hooks/')],
          ['@Store', resolvePath('src/store/')],
          ['@Services', resolvePath('src/services')],
          ['@Middlewares', resolvePath('src/middlewares')],
          ['@Utils', resolvePath('src/utils/')],
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  rules: {
    'react/prop-types': 'off',
    'prefer-arrow-callback': 'off',

    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',

    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': ['error', { props: false }],
  },
}
