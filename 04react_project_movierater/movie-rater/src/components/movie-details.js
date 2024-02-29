import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import {faStar} from '@fortawesome/free-solid-svg-icons'

function MovieDetails(props) {

    return(
        <div>
            {
                props.movie ? (
                    <React.Fragment>
                        <h1>{props.movie.title}</h1>
                        <p>{props.movie.description}</p>
                        {/* <FontAwesomeIcon icon={faCoffee}/> */}
                        <FontAwesomeIcon icon={faStar} />
                    </React.Fragment>
                ) : (null)
            }
        </div>    
    )
}

export default MovieDetails;