#!/usr/bin/env node
'use strict'
const co = require('co')
const cac = require('cac')
const chalk = require('chalk')
const install = require('yarn-install')
const generatePlay = require('./lib/generate-play')
const generateConfig = require('./lib/generate-config')
const updateScripts = require('./lib/update-scripts')

const cli = cac()

cli.command('*', 'Integrate vue-play into your project', () => {
  co(function * () {
    console.log(`${chalk.cyan('>')} Generating ./play folder`)
    yield generatePlay()

    console.log(`${chalk.cyan('>')} Generating ./play.config.js`)
    yield generateConfig()

    console.log(`${chalk.cyan('>')} Updating npm scripts`)
    yield updateScripts()

    console.log(`${chalk.cyan('>')} Installing vue-play and Poi (a minute or less, please be patient)`)
    yield install(['vue-play', 'poi@^8.0.0'], { dev: true, stdio: 'pipe' })

    console.log(chalk.bold('\n  To run vue-play app:'))
    console.log('\n  yarn play\n')

    console.log(chalk.bold('  To build vue-play app:'))
    console.log('\n  yarn build:play\n')
  }).catch(handleError)
})

cli.parse()

function handleError(err) {
  console.error(chalk.red(`> Failed:`))
  console.error(err.stack)
  process.exit(1)
}
