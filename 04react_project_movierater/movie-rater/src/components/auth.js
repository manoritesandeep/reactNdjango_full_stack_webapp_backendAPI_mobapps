import React, { useState, useEffect, useContext } from "react";
import { API } from "../api-service";
import { TokenContext } from "../index";

function Auth() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {token, setToken} = useContext(TokenContext)

    useEffect( () => {
        console.log(token);
        // if token present reroute to movies page
        if(token) window.location.href= '/movies'
    }, [token])

    const loginClicked = () => {
        API.loginUser({username, password})
            .then(resp => setToken(resp.token))
            .catch(error => console.log(error))
    }

    return (
        <div>
            <label htmlFor="username">Username: </label>
            <input 
                id="username" 
                type="text" 
                placeholder="Enter Username"
                value={username}
                onChange={ evt => setUsername(evt.target.value)}
            /><br/>
            <label htmlFor="password">Password: </label>
            <input 
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={ evt => setPassword(evt.target.value)}
            /><br/>
            <button onClick={loginClicked}>Login</button>
        </div>
    )
}

export default Auth;
