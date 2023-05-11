import { useState } from 'react';
import { MdOutlineAddCircleOutline } from 'react-icons/md'
import { v4 as uuid } from 'uuid';
import useNoteContext from '../hooks/use-note-context'

export default function AddNote(){

  const [text, setText] = useState('')
  const { addNote } = useNoteContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newNote = {
      id: uuid(),
      text,
      date: new Date().toLocaleString()
    }

    addNote(newNote)
    setText('')
  }

  const handleChange = ({target}) => {
    setText(target.value)
  }

  return(
    <form className='add-note' onSubmit={handleSubmit}>
        <textarea placeholder='your note.. ' className='newnote' value={text} onChange={handleChange}/>
        <button className='add-button'><MdOutlineAddCircleOutline /></button>
    </form>
  );
}