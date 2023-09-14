
import {  NavLink } from "react-router-dom";
import { useState } from "react";

const MainNavigation = () => {

     const [loginFlag , setloginFlag] = useState(false);
     

     
    const onloginFlagChange = (e) => {
      setloginFlag(true);
    };

     
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <a href="#" className="navbar-brand">
            LoanSwift Inc
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="/add" className="nav-link">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <NavLink to="/Login" onClick={onloginFlagChange} className="nav-link">
                {loginFlag?"Logout":"Login"}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default MainNavigation;