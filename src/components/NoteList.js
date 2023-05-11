import Note from './Note';
import AddNote from './AddNote'

export default function NoteList(){
  return(
    <div className='scroll-zone'>
      <div className='note-container'>
        <Note />
        <AddNote />
      </div>
    </div>
  );
}