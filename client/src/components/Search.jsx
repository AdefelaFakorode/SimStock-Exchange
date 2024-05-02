import { useState } from 'react';
import { IoIosClose } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";

function Search({ setTicker}) {
  //symbol look up
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from causing a page reload
    console.log(input);
    setTicker(input.toUpperCase()); // Update the parent component's ticker state
    setInput(''); // Clear the input field after submission
  };

  //set input to empty string
  const clear = () =>{
    setInput('');
  }
  // Adefela's code
  // return (
  //   <div className='flex items-center border-2 rounded-md relative z-50 w-96 bg-white border-neutral-200'>
  //     <input type="text" 
  //     value={input} 
  //     className='w-full px-4 focus:outline-none rounded-md'
  //     placeholder='Search Stock...'
  //     onChange={(event) =>{
  //       setInput(event.target.value); //update input state
  //     }}
  //     />

  //     {input && ( 
  //     <button onClick={clear}>
  //       <IoIosClose className="h-4 w-4 fill-gray-500" />
  //     </button>
  //     )}

  //     {!input && (
  //       <button>
  //       <FaMagnifyingGlass/>
  //       </button>
  //     )}
      
  //   </div>
  // );

  return (
    <form onSubmit={handleSubmit} className='flex items-center border-2 rounded-md relative z-50 w-96 bg-white border-neutral-200'>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter stock ticker..."
        className="w-full px-4 focus:outline-none rounded-md"
      />
      <button type="submit" className="p-2">
        <span>Submit</span>
      </button>
    </form>
  );
}

export default Search;
