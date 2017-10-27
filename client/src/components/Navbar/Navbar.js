import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";
import "materialize-css";
import "react-materialize";

const Navbar = props =>
  <nav className="nav-wrapper blue darken-4">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="brand-logo" to="/">Fantasy Football GM</Link>
        </div>

          <ul className="right nav navbar-nav">
            {
          !props.authenticated ? (

          <div>
            <li className={
              window.location.pathname === "/" ||
              window.location.pathname === "/signin"
                ? "active"
                : ""}
              ><Link to="/signin">Sign In</Link>
            </li>
            <li className={window.location.pathname === "/signup" ? "active" : ""}
              ><Link to="/signup">Sign Up</Link>
            </li>
          </div>

        ) : (

          <div>
<<<<<<< Updated upstream
          <li
            className={window.location.pathname === "/teammanager" ? "active" : ""}
            ><Link to="/teammanager">Team Manager</Link>
          </li>
          <li
            className={window.location.pathname === "/playerRankings" ? "active" : ""}
            ><Link to="/playerRankings">Player Rankings</Link>
          </li>
          <li
            className={window.location.pathname === "/signout" ? "active" : ""}
            ><Link to='/signout'>Sign Out</Link>
          </li>
        </div>
=======
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
                ><Link to="/twitter">Twitter</Link>
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
>>>>>>> Stashed changes

        )
        }
          </ul>
    </div>
  </nav>;

export default Navbar;
