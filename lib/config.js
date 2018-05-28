require('dotenv').config()

const defaultConfig = {
  smtp: 1025,
  web: 1080,
  ip: '0.0.0.0',
  outgoingHost: 'localhost',
  outgoingPort: 25,
  outgoingUser: null,
  outgoingPass: null,
  outgoingSecure: false,
  autoRelay: false,
  incomungUser: null,
  incomungPass: null,
  webIp: null,
  webUser: null,
  webPass: null,
  basePathname: '/',
  disabledWeb: false,
  hideExtensions: [],
  open: false,
  verbose: false,
  silent: false
}

// support env vars
Object.keys(defaultConfig).forEach(function (key) {
  const envKey = 'MAILDEV_' + key.split(/(?=[A-Z])/).join('_').toUpperCase()
  if (process.env[envKey]) {
    defaultConfig[key] = process.env[envKey]

    if (key === 'hideExtensions') {
      defaultConfig[key] = defaultConfig[key].split(',')
    }
  }
})

module.exports = defaultConfig
