import React, { useState, useEffect} from "react";
import { API } from "../api-service";
import { useCookies } from "react-cookie";

function Auth() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [ isLoginView, setIsLoginView] = useState(true)

    // const {token, setToken} = useContext(TokenContext) 
    const [token, setToken] = useCookies(['mr-token']);  // Name cookie - this case 'mr-token'

    useEffect( () => {
        // console.log(token);
        // if token present reroute to movies page
        if(token['mr-token']) window.location.href= '/movies'
    }, [token])

    const loginClicked = () => {
        API.loginUser({username, password})
            .then(resp => setToken('mr-token', resp.token))
            .catch(error => console.log(error))
    }

    const registerClicked = () => {
        API.registerUser({username, password})
            // .then(resp => setToken('mr-token', resp.token))
            // .then(resp => console.log(resp))

            // login automatically once new user is registerd.
            .then(() => loginClicked())
            .catch(error => console.log(error))
    }

    // disable login button if usename or password is missing
    const isDisabled = username.length === 0 || password.length === 0;
    
    return (
        <div className="App">
            <header className="App-header">
               { isLoginView ? 
                <h1>Welcome to back! Please continue to Login</h1> : 
                <h1>Register</h1> 
                } 
            </header>
            <div className="login-container">          
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
                {/* // change button with page Login to Register... */}
                { isLoginView ? 
                    <button onClick={loginClicked} disabled={isDisabled}>Login</button> :
                    <button onClick={registerClicked} disabled={isDisabled}>Register</button>
                }
                {/* <button onClick={loginClicked}>Login</button> */}

                { isLoginView ? 
                    <p onClick={()=> setIsLoginView(false)}>Don't have an account? Click here to register!</p>
                    : <p onClick={()=> setIsLoginView(true)}>Already have an account with us! Click here to Login!</p> 
                    }
                {/* when we click the below line, it changes to register i.e setIsLoginView(false) */}            
            </div>  
        </div>
    )
}

export default Auth;
