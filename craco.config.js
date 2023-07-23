const path = require('path')

const resolvePath = (currentPath) => path.resolve(__dirname, currentPath)

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: '@import "@Assets/styles/main.scss";',
      },
    },
  },
  webpack: {
    alias: {
      '@Assets': resolvePath('src/assets/'),
      '@Components': resolvePath('src/components/'),
      '@Layouts': resolvePath('src/layouts/'),
      '@Pages': resolvePath('src/pages/'),
      '@Store': resolvePath('src/store/'),
      '@Utils': resolvePath('src/utils/'),
    },
  },
}
