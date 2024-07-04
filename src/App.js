import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import FooterComponent from './components/FooterComponents';

import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponents from './components/AddEmployeeComponents';
import ListEmployeeComponent1 from './components/ListEmployeeComponent1';
import ListEmployeeComponent2 from './components/ListEmployeeComponent2';
import AddEmployeeComponents1 from './components/AddEmployeeComponents1';
import AddEmployeeComponents2 from './components/AddEmployeeComponents2';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Main_Page from './components/Main_Page';
import UserDashboard from './components/UserDashboard';
import SemiUserDashboard from './components/SemiUserDashboard';
import SearchEmployeeComponent from './components/SearchEmployeeComponent';
import SearchEmployeeComponent2 from './components/SearchEmployeeComponent2';
function App() {


  return (
    <div className='wrapper'>
      <Router>
     
      <Routes>
            
              <Route path="/home" element= { <Home/>} />
              <Route path="/login" element= { <Login/>}  />
              <Route path="/" element= { <Register/>} />
              <Route path="/main" element= { <Main_Page/>} />
              <Route path="/search-employee" element={<SearchEmployeeComponent />} />
              <Route path="/search-employee2" element={<SearchEmployeeComponent2 />} />
              <Route path="/data" element={<ListEmployeeComponent />} />
              {/* <Route path="/home" element={<LoginForm />} /> */}
              <Route path="/employee" element={<ListEmployeeComponent />} />
              <Route path="/employee1" element={<ListEmployeeComponent1 />} />
              <Route path="/employee2" element={<ListEmployeeComponent2 />} />
              <Route path="/add-employee" element={<AddEmployeeComponents />} />
              <Route path="/add-employee1" element={<AddEmployeeComponents1 />} />
              <Route path="/add-employee2" element={<AddEmployeeComponents2 />} />
              <Route path="/edit-employee/:empid" element={<AddEmployeeComponents />} />
              <Route path="/edit-employee2/:empid" element={<AddEmployeeComponents2 />} />
             
              <Route path="/register" element={<Register />} />
              <Route path="/user-dashboard" element={<UserDashboard />} />
              <Route path="/semi-user-dashboard" element={<SemiUserDashboard />} />



            </Routes>
        {/* <HeaderComponent />
        {isAuthenticated ? (
          <div className="container">
            <Routes>
              <Route path="/" element={<ListEmployeeComponent />} />
              <Route path="/home" element={<LoginForm />} />
              <Route path="/employee" element={<ListEmployeeComponent />} />
              <Route path="/add-employee" element={<AddEmployeeComponents />} />
              <Route path="/edit-employee/:empid" element={<AddEmployeeComponents />} />
            </Routes>
             
          </div>
        ) : null}
        <FooterComponent /> */}
      </Router>
    </div>
  );
}


export default App;

