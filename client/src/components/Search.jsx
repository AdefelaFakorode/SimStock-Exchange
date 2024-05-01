import { useState } from 'react';
import { IoIosClose } from "react-icons/io";

function Search() {
  //symbol look up
  const [input, setInput] = useState('');

  //set input to empty string
  const clear = () =>{
    setInput('');
  }

  return (
    <div className='flex items-center border-2 rounded-md relative z-50 w-96 bg-white border-neutral-200'>
      <input type="text" 
      value={input} 
      className='w-full px-4 focus:outline-none rounded-md'
      placeholder='Search Stock...'
      onChange={(event) =>{
        setInput(event.target.value); //update input state
      }}
      />

      {input && ( 
      <button onClick={clear}>
        <IoIosClose className="h-4 w-4 fill-gray-500" />
      </button>
      )}

      
    </div>
  );
}

export default Search;
