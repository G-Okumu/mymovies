import logo from '../logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './NavBar';

function App() {
  // const [popular, setPopular] = useState([]);

  // console.log(popular);


  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_API_URL}upcoming?${process.env.REACT_APP_API_STRING}=${process.env.REACT_APP_API_KEY}`)
  //     .then(r => r.json())
  //     .then(data => {
  //       setPopular(data);
  //     });
  // }, [])


  return (
    <>
    <NavBar/>
    </>
  );
}

export default App;
