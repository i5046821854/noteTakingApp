const fs = require('fs')
const chalk = require('chalk')

const addNote = function (title, body){
    const notes = loadNotes()

    const duplicatedNote = notes.find(note => note.title === title)   //해당하는 노트를 찾았는데도 계속 탐색하면 비효율적이니까 한번 찾으면 끝나는 걸로
    if(!duplicatedNote)
    {
        notes.push({
            title: title,
            body: body, 
        })
        saveNotes(notes)
        console.log(chalk.green.inverse.bold("new note added"))
    }else
    {
        console.log(chalk.red.inverse.bold("note title taken"))
    }
    /*const duplicatedNotes = notes.filter((note) => note.title === title)

    if(duplicatedNotes.length === 0)
    {
        notes.push({
            title: title,
            body: body, 
        })
        saveNotes(notes)
        console.log(chalk.green.inverse.bold("new note added"))
    }else
    {
        console.log(chalk.red.inverse.bold("note title taken"))
    }*/
}

const removeNotes = (title) =>{
    const notes = loadNotes()

    const notRemoveNotes = notes.filter((note) => note.title !== title) 

    if(notRemoveNotes.length === notes.length)
    {
        const responseZero = chalk.red.inverse.bold("no notes removed")
        console.log(responseZero)
    }
    else
    {
        const response = chalk.green.inverse.bold("note is removed")
        console.log(response)
        saveNotes(notRemoveNotes)
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const listNotes = () =>{
    Notes = loadNotes()

    Notes.forEach((element) => {
        console.log(element.title)
    });
    
    /*
    Notes.filter((Note) => {
        console.log(Note.title)
    })*/
}
const readNotes =(title) =>{
    const Notes = loadNotes()
    const Note = Notes.find(element => element.title === title)
    if(Note)
    {
        console.log(chalk.green.inverse.bold(Note.title))
        console.log(Note.body)
    }else
    {
        console.log(chalk.red.inverse.bold("unable to read"))
    }
    
}
const loadNotes = () =>{
    try{
        const dataBUffer = fs.readFileSync('notes.json')
        const dataJSON = dataBUffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
    
}

module.exports = {
    addNote : addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}