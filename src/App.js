import React, { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // Here, we'll later add logic to fetch TikTok accounts
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="App">
      <h1>TikTok Meme Account Finder</h1>
      <input 
        type="text" 
        placeholder="Enter keyword or username" 
        value={searchTerm} 
        onChange={handleInputChange} 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default App;

