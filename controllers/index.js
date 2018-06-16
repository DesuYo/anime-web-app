const fs = require('fs')

const files = {}

fs
  .readdirSync(__dirname)
  .filter(fileName => fileName !== 'index.js')
  .forEach(fileName => {
    const ctrlName = fileName.split('.')[0]
    files[ctrlName] = require(`./${fileName}`)
  })

module.exports = files