import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">Fantasy Football GM</Link>
      </div>
      <ul className="nav navbar-nav">
        <li className={
          window.location.pathname === "/" ||
          window.location.pathname === "/signin"
            ? "active"
            : ""}
          ><Link to="/">Sign in</Link>
        </li>
        <li
          className={window.location.pathname === "/signup" ? "active" : ""}
          ><Link to="/signup">Sign up</Link>
        </li>
        <li
          className={window.location.pathname === "/teammanager" ? "active" : ""}
          ><Link to="/teammanager">Team Manager</Link>
        </li>
        <li
          className={window.location.pathname === "/player_rankings" ? "active" : ""}
          ><Link to="/player_rankings">Player Rankings</Link>
        </li>
      </ul>
    </div>
  </nav>;

export default Navbar;
