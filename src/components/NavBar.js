import React, { useState, useEffect } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    if (isNavExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isNavExpanded]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">CycleGo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setIsNavExpanded(!isNavExpanded)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavExpanded ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" d-flex justify-content-center>
              <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/rentbike" className="nav-link" activeClassName="active">Rent Bike</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signup" className="nav-link" activeClassName="active">Signup</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
