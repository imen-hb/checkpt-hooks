import React from 'react'
import Filter from '../components/Filter'
import AddMovie from '../components/AddMovie'
import MovieList from '../components/AddMovie'


const Movies= ({inputSearch,setInputSearch,newRate,setNewRate,add,movies}) => {
  return (
    <div style={{display:"flex",justifyContent:"center",margin:"5%"}}>
        <h1> 
          <Filter inputSearch={inputSearch} setInputSearch={setInputSearch} newRate={newRate} setNewRate={setNewRate}/>
          <MovieList  movies={movies} inputSearch={inputSearch} newRate={newRate}/>   
          <AddMovie add={add} />
        </h1>
    </div>
  )
}

export default Movies;