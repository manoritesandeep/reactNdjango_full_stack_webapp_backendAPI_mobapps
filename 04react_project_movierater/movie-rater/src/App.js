import React, {useEffect, useState} from 'react';
import './App.css';
import MovieList from './components/movie-list'
import MovieDetails from './components/movie-details'
import MovieForm from './components/movie-form';
import { useCookies } from 'react-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFilm} from '@fortawesome/free-solid-svg-icons';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import { useFetch } from './hooks/useFetch';

function App() {

  const [movies, setMovies ] = useState([]) 
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [editedMovie, setEditedMovie] = useState(null)

  const [token, setToken, deleteToken] = useCookies(['mr-token']);
  const [data, loading, error] = useFetch();

  useEffect( () => {
    setMovies(data);
  }, [data])

  // // We updated the below to use custom hook --> useFetch.js
  // useEffect(()=>{
  //   fetch("http://127.0.0.1:8000/api/movies/", {
  //     method: 'GET',
  //     headers:{
  //       'Content-Type': 'application/json',
  //       // 'Authorization': 'Token 45cae1e8ffb92de714663b86b5fce0fdd0d4c77b',
  //       'Authorization': `Token ${token['mr-token']}`
  //     }
  //   })
  //   // take the Response and convert to json
  //   .then( resp => resp.json())
  //   // set local state
  //   .then( resp => setMovies(resp))
  //   .catch( error => console.log( error ))
  // }, [])

  // If no token then kick back to authentication, vice-versa for auth.js
  useEffect( () => {
    if(!token['mr-token']) window.location.href='/';
  }, [token])

  // const movieClicked = movie => {
  //   // console.log(movie.title)
  //   setSelectedMovie(movie)
  // }

  const loadMovie = movie => {
    setSelectedMovie(movie);
    setEditedMovie(null);
  }

  const editClicked = movie => {
    setEditedMovie(movie);
    setSelectedMovie(null);
  }

  const updatedMovie = movie => {
    const newMovies = movies.map( mov => {
      if (mov.id === movie.id){
        return movie;
      }
      return mov;
    })
    setMovies(newMovies)
  }

  const newMovie = () => {
    setEditedMovie({title: '', description: ''});
    setSelectedMovie(null)
  }

  const movieCreated = movie => {
    // append new movies to current dataframe
    const newMovies = [...movies, movie]
    // after appending, update state
    setMovies(newMovies)
  }

  // Short version for removeClicked
  const removeClicked = movie => {
    const newMovies = movies.filter( mov => mov.id !== movie.id);
    setMovies(newMovies)
  }

  const logoutUser = () => {
    deleteToken(['mr-token'])
  }

  // Long version for removeClicked
  // const removeClicked = movie => {
  //   const newMovies = movies.filter( mov => {
  //     if (mov.id === movie.id) {
  //       return false;
  //     }
  //     return true;
  //   })
  //   setMovies(newMovies)
  // }

  if(loading) return <h1>Loading content...</h1>
  if(error) return <h1>Error loading movie content...</h1>


  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <FontAwesomeIcon icon={faFilm} />
          <span> Movie Rater</span>
        </h1>
        <FontAwesomeIcon icon={faSignOutAlt} onClick={logoutUser} />
      </header>
      <div className='layout'>
        <div>
          {/* left col */}
          <MovieList 
            movies={movies} 
            movieClicked= {loadMovie} 
            editClicked={editClicked} 
            removeClicked={removeClicked}
          />
          <button onClick={ newMovie }>Add new movie</button>
          {/* we move the following logic to its individual componenet (movie-list.js) { movies.map( movie => {
            return <div key={movie.id}>
                    <h2>{[movie.id, ': ', movie.title]}</h2>
                  </div>
          })} */}
        </div>          
          {/* right col */}
          <MovieDetails movie={selectedMovie} updateMovie={loadMovie}/>
          { 
          editedMovie ? <MovieForm movie={editedMovie} updatedMovie={updatedMovie} movieCreated={movieCreated}
          /> : null}
        </div>
    </div>
  );
}

export default App;
