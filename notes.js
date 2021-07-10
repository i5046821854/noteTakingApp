const fs = require('fs')

const getNotes = function(){
    const string = "Your notes..."
    return string
}

const addNote = function(title, body){
    const notes = loadNotes()

    const duplicatedNotes = notes.filter(function (note){
            return note.title === title
    })

    if(duplicatedNotes.length === 0)
    {
        notes.push({
            title: title,
            body: body, 
        })
        saveNotes(notes)
        console.log("new note is added")
    }else
    {
        console.log("note title taken")
    }
}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function(){
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
    addNote : addNote
}