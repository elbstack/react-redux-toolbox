require('babel/polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'react-redux-toolbox',
    description: 'This is a starter kit for a react redux project. Inspired by https://github.com/erikras/react-redux-universal-hot-example we build our own base project without all these default content and a different redux structure.',
    meta: {
      charSet: 'utf-8',
      property: {
        'og:site_name': 'react-redux-toolbox',
        'og:image': 'https://react-redux.herokuapp.com/logo.jpg',
        'og:locale': 'en_US',
        'og:title': 'react-redux-toolbox',
        'og:description': 'react-redux-toolbox',
        'twitter:card': 'summary',
        'twitter:site': '@twitter',
        'twitter:creator': '@twitter',
        'twitter:title': 'react-redux-toolbox',
        'twitter:description': 'react-redux-toolbox',
        'twitter:image': 'https://react-redux.herokuapp.com/logo.jpg',
        'twitter:image:width': '200',
        'twitter:image:height': '200'
      }
    }
  }
}, environment);
