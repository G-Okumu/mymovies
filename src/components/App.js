import { Route, Routes } from 'react-router-dom';
import MovieDetail from './MovieDetail';
import MoviesList from './MoviesList';
import Upcoming from './Upcoming';

function App() {
  return (
    <>
      <Routes>
        <Route exact="true" path='/' element={<MoviesList />} />
        <Route exact="true" path='/upcoming' element={<Upcoming />} />
        <Route exact="true" path='moviedetail/:id' element={<MovieDetail/>} />
      </Routes>

    </>
  );
}

export default App;
