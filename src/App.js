import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import MoviesList from './components/MovieList.js';
import {moviesData} from './Data'
import AddMovie from './components/AddMovie.js';
import Filter from './components/Filter.js';




function App() {
  const [ movies, setMovies] = useState(moviesData)

const[inputSearch,setInputSearch]= useState("")
const[newRate,setNewRate]=useState(0)

  const add = (newMovie)=> {
    setMovies([...movies,newMovie])
  }

  return (
    <div className="App" style={{backgroundColor: "black"}}>
      <Navigation/> 
      <Filter inputSearch={inputSearch} setInputSearch={setInputSearch} newRate={newRate} setNewRate={setNewRate}/>
      <MoviesList movies={movies} inputSearch={inputSearch} newRate={newRate}/>   
      <AddMovie add={add}/>  
    </div>
  );
}

export default App;
