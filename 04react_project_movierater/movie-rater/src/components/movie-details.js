import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import {faStar} from '@fortawesome/free-solid-svg-icons'

function MovieDetails(props) {

    const [highlighted, setHighlighted] = useState(-1)

    let mov = props.movie

    const highlightRate = high => evt => {
        setHighlighted(high);
    }

    const rateClicked = rating => evt => {
        fetch(`http://127.0.0.1:8000/api/movies/${mov.id}/rate_movie/`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Token fbcea00e3a28e96a41e8bc4dc4788ebb8e10a65a'
      },
      // send the updated content using API... convert the rating to string... Add one to offset index
      body: JSON.stringify({stars: rating + 1})
    })
    // take the Response and convert to json
    // .then( resp => resp.json())
    .then( () => getDetails())  // Don't really need to use the results as we are triging another func, no point converting
    .catch( error => console.log( error ))
   }

   const getDetails = () => {
    fetch(`http://127.0.0.1:8000/api/movies/${mov.id}/`, {
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Token fbcea00e3a28e96a41e8bc4dc4788ebb8e10a65a'    
        }
    })
    .then ( resp => resp.json())
    .then ( resp => props.updateMovie(resp))
    .then ( error => console.log(error))
   }

    return(
        <React.Fragment>
            {
            mov ? (
                <div>
                    <h1>{mov.title}</h1>
                    <p>Description: {mov.description}</p>
                    {/* <FontAwesomeIcon icon={faCoffee}/> */}
                    <FontAwesomeIcon icon={faStar} className={mov.avg_movie_rating > 0 ? 'orange':''}/>
                    <FontAwesomeIcon icon={faStar} className={mov.avg_movie_rating > 1 ? 'orange':''}/>
                    <FontAwesomeIcon icon={faStar} className={mov.avg_movie_rating > 2 ? 'orange':''}/>
                    <FontAwesomeIcon icon={faStar} className={mov.avg_movie_rating > 3 ? 'orange':''}/>
                    <FontAwesomeIcon icon={faStar} className={mov.avg_movie_rating > 4 ? 'orange':''}/>
                    {/* Display number of ratings and average rating for selected movie */}
                    (Avg rating: {mov.avg_movie_rating} of Total ratings: {mov.num_movie_ratings})
                    <div className='rate-container'>
                        <h2>Rate it!</h2>
                        {   [...Array(5)].map( (e, i) => {
                            return <FontAwesomeIcon key={i} icon={faStar} className={highlighted > i-1 ? 'purple':''} 
                                // defining events
                                onMouseEnter={highlightRate(i)}
                                onMouseLeave={highlightRate(-1)}
                                onClick={rateClicked(i)}                     
                            />
                        })}
                    </div>
                </div>
                ) : (null)
            }
        </React.Fragment>    
    )
}

export default MovieDetails;