module.exports = {
  locales: ['en', 'es'],
  sourceLocale: 'en',
  catalogs: [
    {
      path: 'locales/{locale}/messages',
      include: ['app', 'components'],
    },
  ],
  format: 'po',
  compileNamespace: 'ts',
  formatOptions: {
    origins: false,
    lineNumbers: false,
  },
};

