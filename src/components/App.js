import logo from '../logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
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
    <>
      <h1 className="text-3xl text-blue-700 underline">
       Testing Tailwind Installation
      </h1>
    </>
  );
}

export default App;
