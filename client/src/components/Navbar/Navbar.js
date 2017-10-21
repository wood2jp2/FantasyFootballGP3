import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "materialize-css";
import "react-materialize";
import { Parallax } from "react-materialize";

const Navbar = props =>
  <nav>
    <ul className="nav-wrapper blue darken 4">
        <li><Link to="/ " className="brand-logo left">GW's Fantasy Football Virtual GM</Link></li>
      <ul className="right hide-on-med-and-down">
        <li><Link to="/myteams">My Teams</Link></li>
        <li><Link to="/rankings">Player Rankings</Link></li>
        <li><Link to="/socialmedia">Social Media</Link></li>
        <li><Link to="/news">Player News</Link></li>
      </ul>
    </ul>
  </nav>;
  

export default Navbar;
