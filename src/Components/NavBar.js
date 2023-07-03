import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../Css/App.css";
import carbookLogo from '../Assets/Images/carbook.png';

import AuthService from "../Services/Auth.service";
// import AuthVerify from "../Common/AuthVerify";
import EventBus from "../Common/EventBus";


function NavBar() {
  const [showWorkshopBoard, setShowWorkshopBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowWorkshopBoard(user.roles.includes("ROLE_WORKSHOP"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowWorkshopBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <div className="container-fluid px-0">
      <div className="App">

        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
          <div className="container">
            <a className="navbar-brand" href="index.html">Car<span>Book</span></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                    aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="oi oi-menu"></span> Menu
            </button>

            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active"><a href="" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="" className="nav-link">About</a></li>
                <li className="nav-item"><a href="" className="nav-link">Pricing</a></li>
                <li className="nav-item"><a href="" className="nav-link">Our Car</a></li>
                <li className="nav-item"><a href="" className="nav-link">Blog</a></li>
                <li className="nav-item"><a href="" className="nav-link">Contact</a></li>
              </ul>
            </div>

            {showWorkshopBoard && (
              <li className="nav-item">
                <Link to={"/workshop"} className="nav-link">
                  Workshop Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/adminboard"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
            {currentUser && (
              <li className="nav-item">
                <Link to={"/dashboard"} className="nav-link">
                  Dashboard
                </Link>
              </li>
            )}

           
          </div>
          
          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>

              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto float-sm-start">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item float-sm-start">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>



        {/* <AuthVerify logOut={logOut}/>
     */}

      </div></div>
  );
}

export default NavBar;
