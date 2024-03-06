import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies,inputSearch,newRate}) => {

  return (
    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",marginTop:"5%"}}>
        {
          newRate > 0 ?
            movies 
            .filter((movie)=>movie.rate === newRate && movie.title.toUpperCase().includes(inputSearch.toUpperCase().trim()))
            .map((movie)=>
            <MovieCard movie={movie} key={movie.id} />)
          
          :

            movies 
            .filter((movie)=>  movie.title.toUpperCase().includes(inputSearch.toUpperCase().trim()))
            .map((movie)=>
            <MovieCard movie={movie} key={movie.id} />)
        }
    </div>
  )
}

export default MovieList