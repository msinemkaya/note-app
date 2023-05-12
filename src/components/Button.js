import { useRef, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai'
import { FiEdit2 } from 'react-icons/fi'

export default function Button({type, vis, handle}){

  const icons = {
    delete: <AiOutlineDelete />,
    edit: <FiEdit2 />,
  }
 
  return(
    <>
      <button className={`button ${type}`} style={{ visibility: vis ? 'visible' : 'hidden' }} onClick={handle}>{icons[type]}</button>
    </>
  );
}