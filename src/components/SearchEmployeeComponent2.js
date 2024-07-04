/*import React, { useState } from "react";
import { Link } from "react-router-dom";
import EmployeeServices from "../services/EmployeeServices";

const SearchEmployeeComponent2 = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State to manage the visibility of the success message

  const searchEmployee = (e) => {
    e.preventDefault();
    setError(""); // Clear previous error message

    if (employeeId.trim() === "") {
      setError("Employee ID cannot be empty");
      return;
    }

    EmployeeServices.getEmployeeById(employeeId)
      .then((response) => {
        setEmployee(response.data);
        setError(""); // Clear previous error message
      })
      .catch((error) => {
        console.error(error);
        setError("Employee not found");
      });
  };

  const handleDelete = () => {
    // Check if employee is loaded
    if (employee) {
      // Call your delete service method here
      EmployeeServices.deleteEmployee(employeeId)
        .then(() => {
          console.log("Employee deleted successfully");
          // Reset the state after deletion
          setEmployee(null);
          setEmployeeId("");
          // Show success message
          setShowSuccessMessage(true);
          // Hide the success message after 3 seconds
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);
        })
        .catch((error) => {
          console.error("Error deleting employee:", error);
          // Handle delete error
        });
    } else {
      console.log("No employee data loaded to delete");
    }
  };

  const handleUpdate = () => {
    // Implement update logic here
    console.log("Update employee with ID:", employeeId);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Search Employee by ID</h2>
          <Link className="btn btn-info mb- add-employee-button" to="/semi-user-dashboard">
            SemiUserDashboard
          </Link>

          <div className="card-body">
            <form onSubmit={searchEmployee}>
              <div className="form-group mb-2">
                <label className="form-label">Employee ID:</label>
                <input
                  type="text"
                  placeholder="Enter employee ID"
                  name="employeeId"
                  className="form-control"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                />
              </div>
              <button className="btn btn-primary">Search</button>
            </form>
            {error && <div className="alert alert-danger mt-3">{error}</div>}
            {showSuccessMessage && <div className="alert alert-success mt-3">Employee deleted successfully</div>}
            {employee && (
              <div className="mt-3">
                <h3>Employee Details:</h3>
                <p>
                  <strong>ID:</strong> {employee.empid}
                </p>
                <p>
                  <strong>First Name:</strong> {employee.firstname}
                </p>
                <p>
                  <strong>Last Name:</strong> {employee.lastname}
                </p>
                <p>
                  <strong>Designation:</strong> {employee.designation}
                </p>
                <p>
                  <strong>Project:</strong> {employee.project}
                </p>
                <p>
                  <strong>Status:</strong> {employee.status}
                </p>
                <div>
                  <Link className="btn btn-warning" to={`/edit-employee2/${employeeId}`}>
                    Update
                  </Link>
                  <button className="btn btn-danger ms-2" onClick={handleDelete}>
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchEmployeeComponent2;*/
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EmployeeServices from "../services/EmployeeServices";

const SearchEmployeeComponent2 = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State to manage the visibility of the success message
  const navigate = useNavigate();

  const searchEmployee = (e) => {
    e.preventDefault();
    setError(""); // Clear previous error message

    if (employeeId.trim() === "") {
      setError("Employee ID cannot be empty");
      return;
    }

    EmployeeServices.getEmployeeById(employeeId)
      .then((response) => {
        setEmployee(response.data);
        setError(""); // Clear previous error message
      })
      .catch((error) => {
        console.error(error);
        setError("Employee not found");
      });
  };

  const handleDelete = () => {
    // Check if employee is loaded
    if (employee) {
      // Call your delete service method here
      EmployeeServices.deleteEmployee(employeeId)
        .then(() => {
          console.log("Employee deleted successfully");
          // Reset the state after deletion
          setEmployee(null);
          setEmployeeId("");
          // Show success message
          setShowSuccessMessage(true);
          // Hide the success message after 3 seconds
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);
        })
        .catch((error) => {
          console.error("Error deleting employee:", error);
          // Handle delete error
        });
    } else {
      console.log("No employee data loaded to delete");
    }
  };

  const handleUpdate = () => {
    // Implement update logic here
    console.log("Update employee with ID:", employeeId);
    navigate(`/edit-employee/${employeeId}?role=semi-user`);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Search Employee by ID</h2>
          <Link className="btn btn-info mb-2 add-employee-button" to="/semi-user-dashboard">
            SemiUserDashboard
          </Link>

          <div className="card-body">
            <form onSubmit={searchEmployee}>
              <div className="form-group mb-2">
                <label className="form-label">Employee ID:</label>
                <input
                  type="text"
                  placeholder="Enter employee ID"
                  name="employeeId"
                  className="form-control"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                />
              </div>
              <button className="btn btn-primary">Search</button>
            </form>
            {error && <div className="alert alert-danger mt-3">{error}</div>}
            {showSuccessMessage && <div className="alert alert-success mt-3">Employee deleted successfully</div>}
            {employee && (
              <div className="mt-3">
                <h3>Employee Details:</h3>
                <p>
                  <strong>ID:</strong> {employee.empid}
                </p>
                <p>
                  <strong>First Name:</strong> {employee.firstname}
                </p>
                <p>
                  <strong>Last Name:</strong> {employee.lastname}
                </p>
                <p>
                  <strong>Designation:</strong> {employee.designation}
                </p>
                <p>
                  <strong>Project:</strong> {employee.project}
                </p>
                <p>
                  <strong>Status:</strong> {employee.status}
                </p>
                <div>
                  <Link className="btn btn-warning" to={`/edit-employee2/${employeeId}`}>
                    Update
                  </Link>
                  <button className="btn btn-danger ms-2" onClick={handleDelete}>
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchEmployeeComponent2;

