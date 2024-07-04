import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./Main_Page.css";

function UserDashboard() {
  return (
    <div>
      <div className="top-right-buttons">
        <Link className="btn btn-info" to="/register">
          Logout
        </Link>
      </div>
      <div className="container">
        <Header />
        <Link className="btn btn-info add-employee-button" to="/add-employee1">
          Add Employee
        </Link>
        <Link className="btn btn-info add-employee-button" to="/employee1">
          View All Employees
        </Link>
      </div>
    </div>
  );
}

export default UserDashboard;
