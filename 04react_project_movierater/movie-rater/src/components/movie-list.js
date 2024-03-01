import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faEdit} from '@fortawesome/free-solid-svg-icons'


function MovieList(props) {

    const movieClicked = movie => evt => {
        props.movieClicked(movie)
    }
    
    const editClicked = movie => {
        props.editClicked(movie);
    }

    return (
        <div>
            {
            props.movies && props.movies.map(movie => {
                return <React.Fragment key={movie.id}>
                    <h2 onClick={movieClicked(movie)}>{[movie.id, ': ', movie.title]} </h2>
                    {/* Add icons for edit and delete options */}
                    <FontAwesomeIcon icon={faEdit} onClick={ () => editClicked(movie)} />
                    <FontAwesomeIcon icon={faTrash} />
                </React.Fragment>
            })
            }
        </div>
    )
}

export default MovieList;