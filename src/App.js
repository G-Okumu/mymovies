import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // console.log(`${process.env.REACT_APP_API_KEY}`);
  const [popular, setPopular] = useState([]);

  console.log(popular);


  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}upcoming?${process.env.REACT_APP_API_STRING}=${process.env.REACT_APP_API_KEY}`)
    .then(r => r.json())
    .then(data => {
      setPopular(data);
    });
  }, [])

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
