'use strict'
const fs = require('fs')

const data = `
module.exports = {
  entry: {
    app: 'play/app.js',
    preview: 'play/preview.js'
  },
  templateCompiler: true,
  hmrEntry: ['preview'],
  html: [{
    chunks: ['app'],
    filename: 'index.html'
  }, {
    chunks: ['preview'],
    filename: 'preview.html'
  }]
}
`

module.exports = function () {
  return new Promise((resolve, reject) => {
    fs.writeFile('./play.config.js', data, 'utf8', err => {
      if (err) {
        return reject(err)
      }
      resolve()
    })
  })
}