//import file
const Chalk = require('chalk')
const { argv, demandOption } = require('yargs')
const yargs = require('yargs')
const { removeNotes } = require('./notes.js')
const notes = require('./notes.js')

//console.log(process.argv)

//customize yargs version
yargs.version('1.1.0')

//create add commnad
yargs.command({
    command : 'add',
    describe : 'add a new note',
    builder:{
        title:{
            describe: "Note title",
            demandOption: "true",
            type: "string",
        },
        body:{
            describe: "Note body",
            demandOption: "true",
            type: "string"
        },
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }

})

//create remove command
yargs.command({
    command: 'remove',
    describe : 'remove a note',
    builder:{
        title:{
            describe: "note title",
            demandOption : true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: "list the notes",
    handler(){
        console.log(Chalk.green.bold("Note List"))
        notes.listNotes()
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'read the note',
    builder: {
        title:{
            describe:"read the note",
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

yargs.parse()
