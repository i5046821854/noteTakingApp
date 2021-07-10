//import file
const Chalk = require('chalk')
const importedStr = require('./notes.js')

const command = process.argv[2]
if (command === 'add'){
    console.log('adding note!')
} else if(command === 'remove')
{
    console.log("remove note!")
}
