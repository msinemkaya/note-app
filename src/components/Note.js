import { useState } from 'react';
import { TbClick } from 'react-icons/tb'
import Button from './Button';

export default function Note(){

  const [vis, setVis] = useState(false)
 
  const handleClick = () => {
    setVis(!vis)
  }

  return(
    <div className='note'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, deleniti?</p>
      <div className='button-container'>
        <button onClick={handleClick} className='button click'><TbClick /></button>
        <Button type={'delete'} vis={vis} />
        <Button type={'edit'} vis={vis} />
      </div>
    </div>
  );
}