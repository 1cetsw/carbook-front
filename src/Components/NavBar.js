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

  const textColor=global.config.NavBarTextColor;
  const navBarColor=global.config.NavBarBackgroundColor;

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
      <div className="container-fluid px-0 ">
        <div className="App">

          <nav style={{background: navBarColor}} className={`navbar navbar-expand navbar-dark px-4 `}>
            <Link to={"/"} className="navbar-brand">
              <div style={{ width: 50, height: 50 }}>
                <img className="img-fluid rounded-circle mb-4" src={carbookLogo} alt="carbook logo" />
              </div>

            </Link>
            <div className="navbar-nav mr-auto ">

              {showWorkshopBoard && (
                  <li className="nav-item ">
                    <Link to={"/workshop"} className="nav-link">
                      <h7 style={{color: textColor}}> Workshop Board </h7>
                    </Link>
                  </li>
              )}
              {showAdminBoard && (
                  <li className="nav-item">
                    <Link to={"/adminboard"} className="nav-link">
                      <h7 style={{color: textColor}}>Admin Board</h7>
                    </Link>
                  </li>
              )}
              {/*{currentUser && (*/}
              {/*    <li className="nav-item">*/}
              {/*      <Link to={"/user"} className="nav-link">*/}
              {/*        <h7 style={{color: textColor}}>User</h7>*/}
              {/*      </Link>*/}
              {/*    </li>*/}
              {/*)}*/}
              {currentUser && (
                  <li className="nav-item ">
                    <Link to={"/dashboard"} className="nav-link ">
                      <h7 style={{color: textColor}}>Your Cars</h7>
                    </Link>
                  </li>
              )}

            </div>

            {currentUser ? (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={"/profile"} className="nav-link">
                      <h7 style={{color: textColor}}>{currentUser.username}</h7>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="/login" className="nav-link" onClick={logOut}>
                      <h7 style={{color: textColor}}>LogOut</h7>
                    </a>
                  </li>
                </div>
            ) : (
                <div className="navbar-nav ml-auto float-sm-start">
                  <li className="nav-item">
                    <Link to={"/login"} className="nav-link">
                      <h5 style={{color: textColor}}> Login</h5>
                    </Link>
                  </li>
                  <li className="nav-item float-sm-start">
                    <Link to={"/register"} className="nav-link">
                      <h5 style={{color: textColor}}>Sign Up</h5>
                    </Link>
                  </li>
                </div>
            )}
          </nav>
          {/* <AuthVerify logOut={logOut}/>
     */}

        </div></div>
  );
};

export default NavBar;