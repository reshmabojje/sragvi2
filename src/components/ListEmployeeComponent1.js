import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EmployeeServices from "../services/EmployeeServices";
import "./ListEmployeeComponent.css";
import image from './image.jpg';
import Header from "./Header";

const ListEmployeeComponent1 = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    EmployeeServices.getAllEmployee()
      .then((response) => {
        setEmployee(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h1>All Employee Detail</h1>
      <Link className="btn btn-info mb- add-employee-button" to="/user-dashboard">
        User-Dashboard
      </Link>
      
      <div className="row">
        {employee.map((emp) => (
          <div className="col-md-4 mb-4" key={emp.empid}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{emp.firstname} {emp.lastname}</h5>
                <p className="card-text"><strong>Employee ID:</strong> {emp.empid}</p>
                <p className="card-text"><strong>Designation:</strong> {emp.designation}</p>
                <p className="card-text"><strong>Project:</strong> {emp.project}</p>
                <p className="card-text"><strong>Status:</strong> {emp.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListEmployeeComponent1;