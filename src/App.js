import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [repos, setRepos] = useState([{}]);

  useEffect(() => {
    async function getRepos() {
      const response = await fetch("https://api.github.com/users/Sultan336/repos")
      const data = await response.json();
      console.log(data);
      setRepos(data)
    }
    getRepos();

    // fetch('https://api.github.com/users/sultan336/repo')
    // .then(response => response.json())
    // .then(json => {
    //   console.log(json);
    //   setData(json);
    // })
  }, [])

  return (
    <div >
      <h2>List of Repos form github</h2>
      <ul>
        {repos.map((repoObj, ind) => {
          return (<li key={ind}>{repoObj.name}</li>)
        })}
      </ul>
    </div>
  );
}

export default App;