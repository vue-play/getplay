'use strict'
const Pkg = require('update-pkg')

module.exports = function (cwd) {
  const pkg = new Pkg(cwd, {
    create: true // create package.json if it doesn't exist
  })
  pkg.set('scripts.play', 'vbuild dev --config play.config.js')
  pkg.set('scripts.build:play', 'vbuild --config play.config.js')
  return pkg.save()
}
