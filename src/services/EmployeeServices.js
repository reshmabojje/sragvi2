/*import axios from "axios";

const Employee_BASE_REST_API_URL = "http://34.192.144.226:8080/product";

class EmployeeServices {
  getAllEmployee() {
    return axios.get(Employee_BASE_REST_API_URL);
  }

  createEmployee(employee) {
    return axios.post(Employee_BASE_REST_API_URL, employee);
  }
  getEmployeeById(employeeId) {
    return axios.get(Employee_BASE_REST_API_URL + "/" + employeeId);
  }

  updateEmployee(employeeId, employee) {
    return axios.put(Employee_BASE_REST_API_URL + "/" + employeeId, employee);
  }

  deleteEmployee(employeeId) {
    return axios.delete(Employee_BASE_REST_API_URL + "/" + employeeId);
  }
}

export default new EmployeeServices();
*/

import axios from "axios";
 
const Employee_BASE_REST_API_URL = "https://udpoksuruj.execute-api.us-east-1.amazonaws.com/prod";
 
class EmployeeServices {
  getAllEmployee() {
    return axios.get(Employee_BASE_REST_API_URL + "/product");
  }
 
  createEmployee(employee) {
    return axios.post(Employee_BASE_REST_API_URL + "/product", employee);
  }
 
  getEmployeeById(employeeId) {
    return axios.get(Employee_BASE_REST_API_URL + "/product/" + employeeId);
  }
 
  updateEmployee(employeeId, employee) {
    return axios.put(Employee_BASE_REST_API_URL + "/product/" + employeeId, employee);
  }
 
  deleteEmployee(employeeId) {
    return axios.delete(Employee_BASE_REST_API_URL + "/product/" + employeeId);
  }
}
 
export default new EmployeeServices();