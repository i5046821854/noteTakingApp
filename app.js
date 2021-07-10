//import file
const Chalk = require('chalk')
const yargs = require('yargs')
const importedStr = require('./notes.js')

//console.log(process.argv)

//customize yargs version
yargs.version('1.1.0')

//create add commnad
yargs.command({
    command : 'add',
    describe : 'add a new note',
    handler : function (){
        console.log("hello")
    }

})

//create remove command
yargs.command({
    command: 'remove',
    describe : 'remove a note',
    handler: function(){
        console.log('remove note')
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: "list the notes",
    handler: function(){
        console.log('here are the lists of notes')
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'read the note',
    handler: function(){
        console.log("read the note")
    }
})
console.log(yargs.argv)
