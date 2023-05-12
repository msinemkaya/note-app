import { useState } from 'react';
import { TbClick } from 'react-icons/tb'
import Button from './Button';
import useNoteContext from '../hooks/use-note-context';

export default function Note(){

  const [vis, setVis] = useState(false)
  const { notes } = useNoteContext()

  const handleClick = () => {
    setVis(!vis)
  }

  return(
    <>
      {notes.map(note => (
        <div className='note' key={note.id}>
          <p>{note.text}</p>
          <div className='button-container'>
            <button onClick={handleClick} className='button click'><TbClick /></button>
            <Button type={'delete'} vis={vis} />
            <Button type={'edit'} vis={vis} />
          </div>
          <span className='date'>{note.date}</span>
        </div>
      ))}
    </>
  );
}