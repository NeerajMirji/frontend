import React from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from '../Cards/Cards'
import "./Home.css"

const Home = () => {
    const navigate = useNavigate();
    const gotoAdminLogin = () => {
        navigate("/adminlogin")
    }
  return (
    
    
           <div>
            <div className="h2 m-4 "> Loan Management System</div>
            <button type="button" className="btn btn-danger m-2" onClick={gotoAdminLogin} >Admin Portal</button>
            <button type="button" className="btn btn-danger m-2" >User Portal</button> 
            <Cards/> 
            <button type="button" className="btn btn-danger m-2" onClick={gotoAdminLogin} >Admin Portal</button>
            <button type="button" className="btn btn-danger m-2" >User Portal</button>
            <button type="button" className="btn btn-danger m-2" onClick={gotoAdminLogin} >Admin Portal</button>
            <button type="button" className="btn btn-danger m-2" >User Portal</button>
            <div className="h2 m-4 "> Loan Management System</div>
            <button type="button" className="btn btn-danger m-2" onClick={gotoAdminLogin} >Admin Portal</button>
            <button type="button" className="btn btn-danger m-2" >User Portal</button> 
            <Cards/> 
            <button type="button" className="btn btn-danger m-2" onClick={gotoAdminLogin} >Admin Portal</button>
            <button type="button" className="btn btn-danger m-2" >User Portal</button>
            <button type="button" className="btn btn-danger m-2" onClick={gotoAdminLogin} >Admin Portal</button>
            <button type="button" className="btn btn-danger m-2" >User Portal</button>
            <div className="h2 m-4 "> Loan Management System</div>
            <button type="button" className="btn btn-danger m-2" onClick={gotoAdminLogin} >Admin Portal</button>
            <button type="button" className="btn btn-danger m-2" >User Portal</button> 
            <Cards/> 
            <button type="button" className="btn btn-danger m-2" onClick={gotoAdminLogin} >Admin Portal</button>
            <button type="button" className="btn btn-danger m-2" >User Portal</button>
            <button type="button" className="btn btn-danger m-2" onClick={gotoAdminLogin} >Admin Portal</button>
            <button type="button" className="btn btn-danger m-2" >User Portal</button>
            </div>
            
    
    
  )
}

export default Home;