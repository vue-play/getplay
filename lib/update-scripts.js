'use strict'
const Pkg = require('update-pkg')

module.exports = function (cwd) {
  const pkg = new Pkg(cwd, {
    create: true // create package.json if it doesn't exist
  })
  pkg.set('scripts.play', 'vbuild -c play.config.js -d')
  pkg.set('scripts.build:play', 'vbuild -c play.config.js')
  return pkg.save()
}
