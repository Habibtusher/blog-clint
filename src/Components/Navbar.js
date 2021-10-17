import React, { useContext, useEffect, useState } from 'react';
import {Link,NavLink} from "react-router-dom";
import { UserContext } from '../App';
import './Navbar.css'
const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext); 
 
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger fontWeight">
        <div className="container">
          <NavLink className="navbar-brand" to="/"><h3>Turnip Blog</h3></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" exact to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>         
                <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard"> Admin Dashboard</NavLink>
              </li>   
              
             
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;