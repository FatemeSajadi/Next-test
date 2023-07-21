const path = require('path');

module.exports = {
  i18n: {
    locales: ['en', 'fa'],
    defaultLocale: 'en',
  },
  localePath:
  typeof window === 'undefined'
  ? path.resolve('./public/locales')
  : './public/locales',
  ns: ['common']
};
