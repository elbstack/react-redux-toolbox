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
    title: 'fitbut',
    description: 'fitbut - Dein Butler für Fitness und einen besseren Lifestyle.',
    meta: {
      charSet: 'utf-8',
      property: {
        'og:site_name': 'fitbut',
        'og:image': 'https://react-redux.herokuapp.com/logo.jpg',
        'og:locale': 'en_US',
        'og:title': 'fitbut',
        'og:description': 'fitbut - Dein Butler für Fitness und einen besseren Lifestyle.',
        'twitter:card': 'summary',
        'twitter:site': '@fitbut',
        'twitter:creator': '@fitbut',
        'twitter:title': 'fitbut',
        'twitter:description': 'fitbut - Dein Butler für Fitness und einen besseren Lifestyle.',
        'twitter:image': 'https://react-redux.herokuapp.com/logo.jpg',
        'twitter:image:width': '200',
        'twitter:image:height': '200'
      }
    }
  }
}, environment);
