import Note from './Note';

export default function NoteList(){
  return(
    <div className='scroll-zone'>
      <div className='note-container'>
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </div>
    </div>
  );
}