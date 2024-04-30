import { useState } from 'react';

function Search() {
  //symbol look up
  const [input, setInput] = useState('');

  // Function to handle changes in the inpu
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Stock..."
        value={input}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Search;
