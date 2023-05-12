import { createContext, useState, useEffect } from 'react';

export const NoteContext = createContext()

const initialNotes = localStorage.getItem('notes')
  ? JSON.parse(localStorage.getItem('notes'))
  : [];

export function Provider({ children }) {
  const [notes, setNotes] = useState(initialNotes)
  const [searchedNotes , setSearchedNotes] = useState([])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

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

  function searchNote(text){
    const searched = notes.filter((note) => note.text.toLowerCase().includes(text))
    setSearchedNotes(searched)
  }
  
  const values ={
    notes,
    addNote,
    editNote,
    deleteNote,
    searchNote,
    searchedNotes
  }

  return (
    <NoteContext.Provider value={values}>
      {children}
    </NoteContext.Provider>
  )
}