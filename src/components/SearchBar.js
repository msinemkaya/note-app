import { useState } from 'react';
import useNoteContext from '../hooks/use-note-context';
import { BiSearchAlt } from 'react-icons/bi'

export default function SearchBar(){

  const [value, setValue] = useState('')

  const {searchNote} = useNoteContext()

  const handleChange = ({ target }) => {
    setValue(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    searchNote(value)
    setValue('')
  }

  return(
    <form onSubmit={handleSubmit} className='search-form'>
      <input type='text' placeholder='search...' value={value} id='search' onChange={handleChange}/>
      <button className='button search'><BiSearchAlt /></button>
    </form>
  );
}