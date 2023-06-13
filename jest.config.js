const fs = require('fs')

const swcrc = JSON.parse(fs.readFileSync('.swcrc', 'utf8'))

// If you have other plugins, change this line.
;((swcrc.jsc ??= {}).experimental ??= {}).plugins = [['jest_workaround', {}]]

module.exports = {
  transform: {
    '^.+\\.(t|j)s$': ['@swc/jest', swcrc],
  },
  transformIgnorePatterns: [],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
}
