/*import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Register.css';
 
function Register() {
    const [employeename, setEmployeename] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
 
    function validateForm() {
        if (!employeename || !email || !password) {
            setError("All fields are required");
            return false;
        }
        if (!isValidEmail(email)) {
            setError("Invalid email address");
            return false;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            return false;
        }
        return true;
    }
 
    function isValidEmail(email) {
        // Basic email validation
        return /\S+@\S+\.\S+/.test(email);
    }
 
    async function save(event) {
        event.preventDefault();
        if (!validateForm()) {
            return;
        }
        try {
            await axios.post("http://localhost:8085/api/v1/employee/save", {
                employeename: employeename,
                email: email,
                password: password,
            });
            alert("Employee Registration Successfully");
            navigate("/login");
        } catch (err) {
            alert(err);
        }
    }
 
    function goToLogin() {
        navigate("/login");
    }
 
    return (
        <div className="register-container">
            <div className="register-card">
                <h1 className="register-title">Employee Registration</h1>
                {error && <div className="error">{error}</div>}
                <form className="register-form">
                    <div className="form-group">
                        <label>Employee name</label>
                        <input type="text" className="form-control" id="employeename" placeholder="Enter Name"
                            value={employeename}
                            onChange={(event) => setEmployeename(event.target.value)}
                        />
                    </div>
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
                    <button type="submit" className="submit-btn" onClick={save}>Register</button>
                    <button type="button" className="login-btn" onClick={goToLogin}>Login</button>
                </form>
            </div>
        </div>
    );
}
 
export default Register;*/
/*import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Register.css';
 
function Register() {
    const [employeename, setEmployeename] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user"); // Default role set to "user"
    const [error, setError] = useState("");
    const navigate = useNavigate();
 
    function validateForm() {
        if (!employeename || !email || !password) {
            setError("All fields are required");
            return false;
        }
        if (!isValidEmail(email)) {
            setError("Invalid email address");
            return false;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            return false;
        }
        return true;
    }
 
    function isValidEmail(email) {
        // Basic email validation
        return /\S+@\S+\.\S+/.test(email);
    }
 
    async function save(event) {
        event.preventDefault();
        if (!validateForm()) {
            return;
        }
        try {
            let url = "http://34.192.144.226:8085/api/v1/employee/save";
            if (role === "admin") {
                url = "http://34.192.144.226:8085/api/v1/employee/admin/save";
            } else if (role === "semi-user") {
                url = "http://34.192.144.226:8085/api/v1/employee/semi-user/save";
            }
           
            await axios.post(url, {
                employeename: employeename,
                email: email,
                password: password,
                role: role,
            });
            alert("Employee Registration Successfully");
            navigate("/login");
        } catch (err) {
            console.error("Error during registration:", err);
            alert("Registration failed");
        }
    }
 
    return (
        <div className="register-container">
            <div className="register-card">
                <h1 className="register-title">Employee Registration</h1>
                {error && <div className="error">{error}</div>}
                <form className="register-form">
                    <div className="form-group">
                        <label>Employee Name</label>
                        <input type="text" className="form-control" id="employeename" placeholder="Enter Name"
                            value={employeename}
                            onChange={(event) => setEmployeename(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Role</label>
                        <select className="form-control" value={role} onChange={(event) => setRole(event.target.value)}>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                            <option value="semi-user">Semi-User</option>
                        </select>
                    </div>
                    <button type="submit" className="submit-btn" onClick={save}>Register</button>
                    <button type="button" className="login-btn" onClick={() => navigate("/login")}>Login</button>
                </form>
            </div>
        </div>
    );
}
 
export default Register;
*/
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Register.css';
 
function Register() {
    const [employeename, setEmployeename] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user"); // Default role set to "user"
    const [error, setError] = useState("");
    const navigate = useNavigate();
 
    function validateForm() {
        if (!employeename || !email || !password) {
            setError("All fields are required");
            return false;
        }
        if (!isValidEmail(email)) {
            setError("Invalid email address");
            return false;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            return false;
        }
        return true;
    }
 
    function isValidEmail(email) {
        // Basic email validation
        return /\S+@\S+\.\S+/.test(email);
    }
 
    async function save(event) {
        event.preventDefault();
        if (!validateForm()) {
            return;
        }
        try {
            let url = "https://dujfzlrbt9.execute-api.us-east-1.amazonaws.com/prod/api/v1/employee/save";
            if (role === "admin") {
                url = "https://dujfzlrbt9.execute-api.us-east-1.amazonaws.com/prod/api/v1/employee/admin/save";
            } else if (role === "semi-user") {
                url = "https://dujfzlrbt9.execute-api.us-east-1.amazonaws.com/prod/api/v1/employee/semi-user/save";
            }
           
            await axios.post(url, {
                employeename: employeename,
                email: email,
                password: password,
                role: role,
            });
            alert("Employee Registration Successful");
            navigate("/login");
        } catch (err) {
            console.error("Error during registration:", err);
            alert("Registration failed");
        }
    }
 
    return (
        <div className="register-container">
            <div className="register-card">
                <h1 className="register-title">Employee Registration</h1>
                {error && <div className="error">{error}</div>}
                <form className="register-form">
                    <div className="form-group">
                        <label>Employee Name</label>
                        <input type="text" className="form-control" id="employeename" placeholder="Enter Name"
                            value={employeename}
                            onChange={(event) => setEmployeename(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Role</label>
                        <select className="form-control" value={role} onChange={(event) => setRole(event.target.value)}>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                            <option value="semi-user">Semi-User</option>
                        </select>
                    </div>
                    <button type="submit" className="submit-btn" onClick={save}>Register</button>
                    <button type="button" className="login-btn" onClick={() => navigate("/login")}>Login</button>
                </form>
            </div>
        </div>
    );
}
 
export default Register;