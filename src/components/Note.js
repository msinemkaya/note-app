import { useState } from 'react';
import { TbClick } from 'react-icons/tb'
import { TiTick } from 'react-icons/ti'
import Button from './Button';
import useNoteContext from '../hooks/use-note-context';

export default function Note({note}){

  const [vis, setVis] = useState(false)
  const [edit, setEdit] = useState(false)
  const [text, setText] = useState(note.text)
  const { editNote, deleteNote } = useNoteContext()

  const handleClick = () => {
    setVis(!vis)
  }

  const handleType = (type, id = 0) => {
    if(type === 'edit') {
      setEdit(!edit)
    }else {
      deleteNote(id)
    }
  }
  
  const handleChange = ({target}) => {
    setText(target.value)
  }

  const handleSubmit = (e, id, text) => {
    e.preventDefault()
    editNote(id, text)
    setEdit(false)
  }

  return(
    <div className='note'>
      {edit && (
        <form onSubmit={(e) => handleSubmit(e, note.id , text)}>
          <textarea placeholder='your note.. ' className='newnote' value={text} onChange={handleChange}/>
          <button className='button tick'><TiTick/></button>
        </form>
      )}
      {!edit && (
        <p>{note.text}</p>
      )}
      <div className='button-container'>
        <button onClick={handleClick} className='button click'><TbClick /></button>
        <Button type={'delete'} vis={vis} handle={(e) => handleType('delete' , note.id)}/>
        <Button type={'edit'} vis={vis} handle={(e) => handleType('edit')}/>
      </div>
      <span className='date'>{note.date}</span>
    </div>
  );
}