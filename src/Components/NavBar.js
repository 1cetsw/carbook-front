import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../Css/App.css";
import carbookLogo from '../Assets/Images/carbook.png';

import AuthService from "../Services/Auth.service";
// import AuthVerify from "./common/AuthVerify";
import EventBus from "../Common/EventBus";


function  NavBar()  {
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
  <div className="container"> 
    <div className="App">
       
      <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div style={{ width: 40, height: 40 }}>
                            <img className="img-fluid rounded-circle mb-4" src={carbookLogo} alt="carbook logo" />
                        </div>
                       
        <Link to={"/"} className="navbar-brand">
          CARBOOK
        </Link>
        <div className="navbar-nav mr-auto">
          
          {showWorkshopBoard && (
            <li className="nav-item">
              <Link to={"/mod"} className="nav-link">
                Workshop Board
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
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
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

      

      {/* <AuthVerify logOut={logOut}/> */}
    
    
    </div></div>
  );
};

export default NavBar;
