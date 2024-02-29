import React, {useEffect, useState} from 'react';
import './App.css';
import MovieList from './components/movie-list'
import MovieDetails from './components/movie-details'

function App() {

  const [movies, setMovie ] = useState([]) 
  const [selectedMovie, setSelectedMovie] = useState()

  useEffect(()=>{
    fetch("http://127.0.0.1:8000/api/movies/", {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        // 'Authorization': 'Token 45cae1e8ffb92de714663b86b5fce0fdd0d4c77b',
        'Authorization': 'Token fbcea00e3a28e96a41e8bc4dc4788ebb8e10a65a'
      }
    })
    // take the Response and convert to json
    .then( resp => resp.json())
    // set local state
    .then( resp => setMovie(resp))
    .catch( error => console.log( error ))
  }, [])

  const movieClicked = movie => {
    // console.log(movie.title)
    setSelectedMovie(movie)
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>        
      </header>
      <div className='layout'>

          {/* left col */}
          <MovieList movies={movies} movieClicked= {movieClicked}/>
          {/* we move the following logic to its individual componenet (movie-list.js) { movies.map( movie => {
            return <div key={movie.id}>
                    <h2>{[movie.id, ': ', movie.title]}</h2>
                  </div>
          })} */}
          {/* right col */}
          <MovieDetails movie={selectedMovie}/>
        </div>
    </div>
  );
}

export default App;
