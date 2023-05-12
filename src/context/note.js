import { createContext, useState } from 'react';

export const NoteContext = createContext()

export function Provider({ children }) {
  const [notes, setNotes] = useState([])

  function addNote(note) {
    setNotes([
      ...notes,
      note
    ])
  }

  function editNote(id, text){
    const index = notes.findIndex((note) => note.id === id)
    if (index !== -1) {
      notes[index]['text'] = text
    }
    setNotes([...notes])
  }

  function deleteNote(id){
    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
  }

  console.log(notes)
  
  const values ={
    notes,
    addNote,
    editNote,
    deleteNote
  }

  return (
    <NoteContext.Provider value={values}>
      {children}
    </NoteContext.Provider>
  )
}