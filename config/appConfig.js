const activeConfig = 'dev'

const config = {
  dev: {
    appName: 'boilerplate-nextJS',
    appCredit: 'justirva09',
    appDesc: '',
    url: {
      api: 'https://example-url-api.com/api',
      assets: 'https://example-url-api.com/assets',
      origin: 'https://example-url-api.com'
    },
    firebase: {
      apiKey: '',
      authDomain: '',
      databaseURL: '',
      projectId: '',
      storageBucket: '',
      messagingSenderId: '',
      appId: ''
    },
  },
  prod: {
    appName: 'boilerplate-nextJS',
    appCredit: 'justirva09',
    appDesc: '',
    url: {
      api: '',
      assets: '',
      origin: ''
    },
    firebase: {
      apiKey: '',
      authDomain: '',
      databaseURL: '',
      projectId: '',
      storageBucket: '',
      messagingSenderId: '',
      appId: ''
    }
  }
};

const appConfig = config[activeConfig];

export default appConfig;
