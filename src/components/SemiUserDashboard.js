import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./Main_Page.css";

function SemiUserDashboard() {
  return (
    <div>
      <div className="top-right-buttons">
        <Link className="btn btn-info" to="/register">
          Logout
        </Link>
      </div>
      <div className="container">
        <Header />
        <Link className="btn btn-info add-employee-button" to="/add-employee2">
          Add Employee
        </Link>
        <Link className="btn btn-info add-employee-button" to="/search-employee2">
          Search By Id
        </Link>
        <br />
        <Link className="btn btn-info mb-2 add-employee-button" to="/employee2">
          View All Employees
        </Link>
      </div>
    </div>
  );
}

export default SemiUserDashboard;
