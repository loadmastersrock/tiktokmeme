import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [accounts, setAccounts] = useState([]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const options = {
        method: 'GET',
        url: 'https://tiktok-scraper.p.rapidapi.com/user/info',  // Use your chosen API's URL
        params: { username: searchTerm },  // The searchTerm is passed as a parameter
        headers: {
          'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',  // Replace with your actual RapidAPI key
          'X-RapidAPI-Host': 'tiktok-scraper.p.rapidapi.com'  // Update according to your API
        }
      };

      const response = await axios.request(options);
      const accountData = response.data;  // Adjust based on API's response structure

      // Assume the API returns account data including username and followers
      const filteredAccounts = [
        { username: accountData.user.username, followers: accountData.user.followers }
      ];

      setAccounts(filteredAccounts);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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

      <h2>Results:</h2>
      <ul>
        {accounts.map((account, index) => (
          <li key={index}>
            {account.username} - {account.followers.toLocaleString()} followers
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;



