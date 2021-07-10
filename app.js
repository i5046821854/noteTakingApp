//import file
const Chalk = require('chalk')
const Validator = require('validator')
const importedStr = require('./notes.js')
//const importedName = require('./utils.js')
// const importedAdd = require('./utils.js')

// const Name= 'Lee'

// console.log(importedName)
// const sum =  importedAdd(4, -2)
// console.log (sum)
const colorStr = Chalk.inverse.bold.red("hello world!")
console.log(colorStr)
console.log(importedStr())
console.log(Validator.isEmail('dldudtls2@example.com'))
