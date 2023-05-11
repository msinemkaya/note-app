import { useState } from 'react';

export default function SearchBar(){

  const [value, setValue] = useState()

  return(
    <>
      <input type='text' placeholder='search...' value={value} id='search' />
    </>
  );
}