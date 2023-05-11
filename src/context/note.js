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

  const values ={
    addNote,
  }

  return (
    <NoteContext.Provider value={values}>
      {children}
    </NoteContext.Provider>
  )
}