const TOKEN = "fbcea00e3a28e96a41e8bc4dc4788ebb8e10a65a"

export class API {
    // get token for user. body input username, password
    static loginUser(body) {
        return fetch(`http://127.0.0.1:8000/auth/`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( body )
        }).then( resp => resp.json())
    }

    // Use static so that we can directly call the method from the class
    static updateMovie(mov_id, body) {
        return fetch(`http://127.0.0.1:8000/api/movies/${mov_id}/`, {
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`
            },
            body: JSON.stringify( body )
        }).then( resp => resp.json())
    }

    static createMovie( body) {
        return fetch(`http://127.0.0.1:8000/api/movies/`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`
            },
            body: JSON.stringify( body )
        }).then( resp => resp.json())
    }

    static deleteMovie( mov_id ) {
        return fetch(`http://127.0.0.1:8000/api/movies/${mov_id}`, {
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`
            }
        })
    }
}

// Note: if we do not export like below, we need to call the API as { API }
// export default API;