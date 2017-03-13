'use strict'
const path = require('path')
const kopy = require('kopy')

module.exports = function ({
  dest = 'play'
} = {}) {
  const from = path.join(__dirname, '../play')
  const to = path.resolve(dest)
  return kopy(from, to)
}
