/*import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import './Login.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function login(event) {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8085/api/v1/employee/login", {
                email: email,
                password: password,
            });
            
        
            console.log(response.data); // Log the response data

            if (response.data.message === "Email not exits") {
                alert("Email not exits");
            } else if (response.data.message === "Login Success") {
                navigate('/main');
            } else {
                alert("Incorrect Email and Password not match");
            }
        } catch (err) {
            console.error("Error during login:", err);
            alert(err);
        }
    }

    return (
        <div>
            <div className="login-container">
                <div className="row">
                    <h2 className='login-title'>Login</h2>
                    <hr/>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <form>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-success" onClick={login}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;*/
/*import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.css';
 
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
 
    async function login(event) {
        event.preventDefault();
        try {
            const response = await axios.post("http://34.192.144.226:8085/api/v1/employee/login", {
                email: email,
                password: password,
            });
           
            console.log("Response data:", response.data);
 
            if (response.data.status === "Failure") {
                alert("Incorrect Email or Password.");
            } else if (response.data.status === "Success") {
                if (response.data.role === "admin") {
                    navigate('/main'); // Redirect to admin dashboard
                } else if (response.data.role === "semi-user") {
                    navigate('/semi-user-dashboard'); // Redirect to semi-user dashboard
                } else if (response.data.role === "user") {
                    navigate('/user-dashboard'); // Redirect to regular user dashboard
                } else {
                    console.error("Unknown role:", response.data.role);
                    alert("Unknown role received. Please contact support.");
                }
            } else {
                alert("Unexpected response status: " + response.data.status);
            }
        } catch (err) {
            console.error("Error during login:", err);
            alert("Login failed. Please try again later.");
        }
    }
 
    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Employee Login</h1>
                <form className="login-form">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <button type="submit" className="login-btn" onClick={login}>Login</button>
                </form>
            </div>
        </div>
    );
}
 
export default Login;*/
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.css';
 
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
 
    async function login(event) {
        event.preventDefault();
        try {
            const response = await axios.post("https://dujfzlrbt9.execute-api.us-east-1.amazonaws.com/prod/api/v1/employee/login", {
                email: email,
                password: password,
            });
           
            console.log("Response data:", response.data);
 
            if (response.data.status === "Failure") {
                alert("Incorrect Email or Password.");
            } else if (response.data.status === "Success") {
                if (response.data.role === "admin") {
                    navigate('/main'); // Redirect to admin dashboard
                } else if (response.data.role === "semi-user") {
                    navigate('/semi-user-dashboard'); // Redirect to semi-user dashboard
                } else if (response.data.role === "user") {
                    navigate('/user-dashboard'); // Redirect to regular user dashboard
                } else {
                    console.error("Unknown role:", response.data.role);
                    alert("Unknown role received. Please contact support.");
                }
            } else {
                alert("Unexpected response status: " + response.data.status);
            }
        } catch (err) {
            console.error("Error during login:", err);
            alert("Login failed. Please try again later.");
        }
    }
 
    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Employee Login</h1>
                <form className="login-form">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <button type="submit" className="login-btn" onClick={login}>Login</button>
                </form>
            </div>
        </div>
    );
}
 
export default Login;
 
