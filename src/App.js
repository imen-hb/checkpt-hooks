import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { moviesData } from './Data';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Movies from './pages/Movies.js';
import ErrorPage from './pages/ErrorPage';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [inputSearch, setInputSearch] = useState('');
  const [newRate, setNewRate] = useState(0);

  const add = (newMovie) => {
    setMovies([...movies, newMovie]);
  };


  return (
    <div className="App" style={{ backgroundColor: 'black' }}>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movies" element={<Movies 
          inputSearch={inputSearch} setInputSearch={setInputSearch} newRate={newRate} setNewRate={setNewRate}
          movies={movies} 
          add={add} />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>

    </div>
  );
}

export default App;
