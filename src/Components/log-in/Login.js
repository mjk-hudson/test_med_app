import React, {useState, useEffect} from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import {API_URL} from '../..config';

const Login = () => {
    //state vairables for email and password
    const[password, setPassword] = useState("");
    const [email, setEmail] = useState('');
    //Get navigate function from react-router-dom
    const navigate = useNavigate();
    //Check if user is already authenticated, then redirect to homepage
    useEffect(() => {
        if(sessionStorage.getItem("auth-token")) {
            navigate("/");
        }
    },[]);
    //function to handle login submission 
    const login = async (e) => {
        e.preventDefault();
        //send a POST request to the login API endpoint
        const res = await fetch(`${API_URL}/api/auth/login`,{
            method: "POST",
            headers: {
                "content-type": "application/json",
                
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
        //Parse the response JSON
        const json = await res.json();
        if (json.authtoken) {
            //If authentication token is received, store it it session storage
            sessionStorage.setItem('auth-token', json.authtoken);
            sessionStorage.setItem('email', email);

            //Redirect to homepage and reload the window
            navigate('/');
            window.location.reload();
        } else {
            //Handle errors if authentication fails
            if (json.errors) {
                for (const error of json.errors) {
                alert(error.msg);
            }
         } else {
            alert(json.error);
            }
        }
    };

    return(
         <div className="container">
            {/* Div for login grid layout */}
            <div className="login-grid">
            {/* Div for login text */}
            <div className="login-text">
                <h2>Login</h2>
            </div>
            {/* Additional login text with a link to Sign Up page */}
            <div className="login-text">
                Are you a new member? <span><Link to="../Sign_Up/Sign_Up.html" style={{color: "#2190FF"}}> Sign Up Here</Link></span>
            </div>
            <br />
            {/* Div for login form */}
            <div className="login-form">
                <form>
                {/* Form group for email input */}
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className="form-control" placeholder="Enter your email" aria-describedby="helpId"
                    required />
                </div>
                {/* Form group for password input */}
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter your password"
                    required
                    aria-describedby="helpId"
                   />
                </div>
                {/* Button group for login and reset buttons */}
                <div className="btn-group">
                    <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button> 
                    <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                </div>
                <br />
                {/* Additional login text for 'Forgot Password' option */}
                <div className="login-text">
                    Forgot Password?
                </div>
                </form>
            </div>
            </div>
      </div>

    );
}
export default Login;