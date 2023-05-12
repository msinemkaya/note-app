import AddNote from './AddNote'
import Notes from './Notes';

export default function NoteList(){
  return(
    <div className='scroll-zone'>
      <div className='note-container'>
        <Notes />
        <AddNote />
      </div>
    </div>
  );
}