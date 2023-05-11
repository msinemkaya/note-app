import { NoteContext } from '../context/note'
import { useContext } from 'react'

export default function useNoteContext(){
  return useContext(NoteContext)
}