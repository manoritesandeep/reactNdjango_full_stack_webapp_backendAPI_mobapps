import React, {useState} from 'react';

function MovieForm(props) {

    const [title, setTitle] = useState(props.movie.title);
    const [description, setDescription] = useState(props.movie.description);

    const updateClicked = () => {
            console.log('update here')
        }

    return (
        <React.Fragment>
            {
                props.movie ? (
                    <div>
                        <label for="title">Title</label><br/>
                        <input id='title' type="text" placeholder='title' value={title}
                            onChange={ evt => setTitle(evt.target.value)}
                        ></input><br/>
                        <label for='description'>Description</label><br/>
                        <textarea id='description' type='text' placeholder='Enter Description'
                        value={description} onChange={ evt => setDescription(evt.target.value)}>
                        </textarea><br/>
                        <button onClick={evt => updateClicked}>Update</button>
                    </div>
                ) : null
            }
        </React.Fragment>
    )
}

export default MovieForm;