const fs = require('fs')
const rm = require('rimraf')
const generatePlay = require('../lib/generate-play')
const updateScripts = require('../lib/update-scripts')

beforeAll(() => {
  process.chdir(__dirname)
})

afterAll(cleanup)

function cleanup() {
  rm.sync('play*')

  const data = JSON.stringify({
    scripts: { test: 'echo lol' }
  }, null, 2)
  fs.writeFileSync('./fixture/package.json', data, 'utf8')
}

test('generate play', () => {
  return generatePlay({ dest: 'play1' })
    .then(() => {
      const files = fs.readdirSync('./play1')
      expect(files).toEqual(['app.js', 'index.js', 'preview.js'])
    })
})

test('updateScripts', () => {
  return updateScripts('./fixture')
    .then(() => {
      const pkg = require('./fixture/package')

      expect(pkg.scripts.test).toBe('echo lol')
      expect(pkg.scripts.play).toBe('poi --config play.config.js')
      expect(pkg.scripts['build:play']).toBe('poi build --config play.config.js')
    })
})
