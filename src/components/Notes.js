import useNoteContext from '../hooks/use-note-context'
import Note from './Note'

export default function Notes(){

  const { notes } = useNoteContext()

  return(
    <>
      {notes.map((note) => (
        <Note note={note} key={note.id} />
      ))}
    </>
  );
}