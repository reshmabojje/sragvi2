/*
import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./Main_Page.css";

function Main_Page() {
  return (
    <div className="container">
      <Header />
      <Link className="btn btn-info mb-2 add-employee-button" to="/search-employee">
        Search By Id
      </Link>
      <Link className="btn btn-info mb-2 add-employee-button" to="/register">
        Logout
      </Link>
      <br />
      <Link className="btn btn-info mb-2 add-employee-button" to="/employee">
        Show All Employee
      </Link>
    </div>
  );
}

export default Main_Page;
*/
/////////////////////////////////////////////
/*
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./Main_Page.css";
import axios from "axios";
 
function Main_Page() {
  const [file, setFile] = useState(null);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
 
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
 
  const handleFileUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }
 
    const formData = new FormData();
    formData.append("file", file);
 
    try {
      const response = await axios.post("http://localhost:8080/product/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(response.data.message);
      setIsFileUploaded(true);
    } catch (error) {
      alert("Failed to upload file");
    }
  };
 
  const handleDeleteData = async () => {
    try {
      const response = await axios.delete("http://localhost:8080/product/delete-all");
      alert(response.data.message);
      setIsFileUploaded(false);
      setFile(null); // Reset the file input
    } catch (error) {
      alert("Failed to delete data");
    }
  };
 
  return (
<div>
<div className="top-right-buttons">
<Link className="btn btn-info" to="/register">
          Logout
</Link>
</div>
<div className="container">
<Header />
<Link className="btn btn-info add-employee-button" to="/add-employee">
          Add Employee
</Link>
<Link className="btn btn-info add-employee-button" to="/search-employee">
          Search By Id
</Link>
<br />
<Link className="btn btn-info mb-2 add-employee-button" to="/employee">
          View All Employees
</Link>
<br />
<input type="file" onChange={handleFileChange} />
<button className="btn btn-primary mb-2" onClick={handleFileUpload} disabled={isFileUploaded}>
          Upload File
</button>
        {isFileUploaded && (
<button className="btn btn-danger mb-2" onClick={handleDeleteData}>
            Delete Uploaded Data
</button>
        )}
</div>
</div>
  );
}
 
export default Main_Page;
*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./Main_Page.css";
import axios from "axios";
 
function Main_Page() {
  const [file, setFile] = useState(null);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
 
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
 
  const handleFileUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }
 
    const formData = new FormData();
    formData.append("file", file);
 
    try {
      const response = await axios.post("https://udpoksuruj.execute-api.us-east-1.amazonaws.com/prod/product/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(response.data.message);
      setIsFileUploaded(true);
    } catch (error) {
      alert("Failed to upload file");
    }
  };
 
  const handleDeleteData = async () => {
    try {
      const response = await axios.delete("https://udpoksuruj.execute-api.us-east-1.amazonaws.com/prod/product/delete-all");
      alert(response.data.message);
      setIsFileUploaded(false);
      setFile(null); // Reset the file input
    } catch (error) {
      alert("Failed to delete data");
    }
  };
 
  return (
<div>
<div className="top-right-buttons">
<Link className="btn btn-info" to="/register">
          Logout
</Link>
</div>
<div className="container">
<Header />
<Link className="btn btn-info add-employee-button" to="/add-employee">
          Add Employee
</Link>
<Link className="btn btn-info add-employee-button" to="/search-employee">
          Search By Id
</Link>
<br />
<Link className="btn btn-info mb-2 add-employee-button" to="/employee">
          View All Employees
</Link>
<br />
<input type="file" onChange={handleFileChange} />
<button className="btn btn-primary mb-2" onClick={handleFileUpload} disabled={isFileUploaded}>
          Upload File
</button>
        {isFileUploaded && (
<button className="btn btn-danger mb-2" onClick={handleDeleteData}>
            Delete Uploaded Data
</button>
        )}
</div>
</div>
  );
}
 
export default Main_Page;