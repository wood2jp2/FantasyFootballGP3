import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">Fantasy Football GM</Link>
      </div>

        {!props.authenticated ? (

          <div>
            <ul className="nav navbar-nav">
              <li className={
                window.location.pathname === "/" ||
                window.location.pathname === "/signin"
                  ? "active"
                  : ""}
                ><Link to="/signin">Sign in</Link>
              </li>
              <li
                className={window.location.pathname === "/signup" ? "active" : ""}
                ><Link to="/signup">Sign up</Link>
              </li>
            </ul>
          </div>

        ) : (

          <div>
            <ul className="nav navbar-nav">
              <li
                className={window.location.pathname === "/teammanager" ? "active" : ""}
                ><Link to="/teammanager">Team Manager</Link>
              </li>
              <li
                className={window.location.pathname === "/playerRankings" ? "active" : ""}
                ><Link to="/playerRankings">Player Rankings</Link>
              </li>
              <li
                className={window.location.pathname === "/twitter" ? "active" : ""}
                ><Link to="/twitter">Twiteer</Link>
              </li>
              <li
                className={window.location.pathname === "/injuries" ? "active" : ""}
                ><Link to="/injuries">Injuries</Link>
              </li>
              <li
                className={window.location.pathname === "/signout" ? "active" : ""}
                ><Link to='/signout'>Sign Out</Link>
              </li>
            </ul>
          </div>

          )
        }
    </div>
  </nav>;

export default Navbar;
