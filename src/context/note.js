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

  console.log(notes)
  
  const values ={
    notes,
    addNote,
  }

  return (
    <NoteContext.Provider value={values}>
      {children}
    </NoteContext.Provider>
  )
}