import { MdOutlineAddCircleOutline } from 'react-icons/md'

export default function AddNote(){

  const handleClick = () => {
    
  }

  return(
    <div className='add-note'>
      <button className='add-button' onClick={handleClick}><MdOutlineAddCircleOutline /></button>
    </div>
  );
}