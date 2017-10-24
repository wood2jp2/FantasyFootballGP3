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
        {
          !props.authenticated ? (

            <div>
            <li className={
              window.location.pathname === "/" ||
              window.location.pathname === "/signin"
                ? "active"
                : ""}
              ><Link to="/signin">Sign in</Link>
        <li><Link to="/myteams">My Teams</Link></li>
            </li>
            <li
              className={window.location.pathname === "/signup" ? "active" : ""}
              ><Link to="/signup">Sign up</Link>
            </li>
          </div>

        ) : (

          <div>
          <li
            className={window.location.pathname === "/teammanager" ? "active" : ""}
        <li><Link to="/socialmedia">Social Media</Link></li>
          </li>
          <li
            className={window.location.pathname === "/playerRankings" ? "active" : ""}
            ><Link to="/playerRankings">Player Rankings</Link>
        <li><Link to="/news">Player News</Link></li>
          </li>
          <li
            className={window.location.pathname === "/signout" ? "active" : ""}
            ><Link to='/signout'>Sign Out</Link>
          </li>
        </div>

        )
        }
      </ul>

  </nav>;
  

export default Navbar;
