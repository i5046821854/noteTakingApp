const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    const string = "Your notes..."
    return string
}

const addNote = function (title, body){
    const notes = loadNotes()

    const duplicatedNotes = notes.filter((note) => note.title === title)

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
    }
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
    getNotes : getNotes,
    addNote : addNote,
    removeNotes: removeNotes,
}