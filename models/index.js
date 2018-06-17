const fs = require('fs');

const files = {};

fs
  .readdirSync(__dirname)
  .filter(fileName => fileName !== 'index.js')
  .forEach(fileName => {
    const modelName = fileName.split('.')[0]
    files[modelName] = require(`./${fileName}`)
  });

module.exports = files;