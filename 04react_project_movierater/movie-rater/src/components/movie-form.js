import React from 'react';

function MovieForm(props) {
    return (<h2>
            Edit: {props.movie && props.movie.title}
        </h2>
    )
}

export default MovieForm;