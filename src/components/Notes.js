import useNoteContext from '../hooks/use-note-context'
import Note from './Note'

export default function Notes(){

  const { notes, searchedNotes } = useNoteContext()

  return(
    <>
      {searchedNotes.length === 0 && notes.map((note) => <Note note={note} key={note.id} />)}
      {searchedNotes.length > 0 && searchedNotes.map(note => <Note note={note} key={note.id} />)}
    </>
  );
}