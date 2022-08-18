import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieDetail from '../pages/MovieDetail';
import MoviesList from '../pages/MoviesList';
import Upcoming from '../pages/Upcoming';

function App() {
  const [popular, setPopular] = useState([]);

  // console.log(popular);



  useEffect(() => {
      fetch(`${process.env.REACT_APP_API_URL}popular?${process.env.REACT_APP_API_STRING}=${process.env.REACT_APP_API_KEY}`)
          .then(r => r.json())
          .then(data => {
              // console.log(data);
              setPopular([...data.results]);
          });
  }, [])
  

  return (
    <>
      <Routes>
        <Route exact="true" path='/' element={<MoviesList movie={popular}/>} />
        <Route exact="true" path='/upcoming' element={<Upcoming />} />
        <Route exact="true" path='moviedetail/:id' element={<MovieDetail singleMovie={popular}/>} />
      </Routes>

    </>
  );
}

export default App;
