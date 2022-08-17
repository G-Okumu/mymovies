import { Route, Routes } from 'react-router-dom';
import MoviesList from './MoviesList';

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
      <Routes>
        <Route exact="true" path='/' element={<MoviesList />} />
      </Routes>

    </>
  );
}

export default App;
