import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "../Css/App.css";
import carbookLogo from '../Assets/Images/carbook.png';
import deFlagLogo from '../Assets/Images//Icons/de.png';
import plFlagLogo from '../Assets/Images/Icons/pl.png';
import enFlagLogo from '../Assets/Images/Icons/en.png';
import AuthService from "../Services/Auth.service";
// import AuthVerify from "../Common/AuthVerify";
import EventBus from "../Common/EventBus";
import {Container} from "react-bootstrap";

function NavBar() {
    const [showWorkshopBoard, setShowWorkshopBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);
    const textColor = global.config.NavBarTextColor;
    const navBarColor = global.config.NavBarBackgroundColor;

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
        <Container fluid className=" px-0">
            <div className="App ">
                <nav style={{background: navBarColor}} className="navbar navbar-expand-xxl px-4 ">
                    <Link to={"/"} className="navbar-brand">
                        <div className="logo">
                            <img className="img-fluid rounded-circle " src={carbookLogo} alt="carbook logo"/>
                        </div>

                    </Link>


                    <div className="navbar-nav mr-auto ">

                        {showWorkshopBoard && (
                            <li className="nav-item ">
                                <Link to={"/workshop"} className="nav-link">
                                    <h6 style={{color: textColor}}> Workshop Board</h6>
                                </Link>
                            </li>
                        )}
                        {showAdminBoard && (
                            <li className="nav-item">
                                <Link to={"/adminboard"} className="nav-link">
                                    <h6 style={{color: textColor}}>Admin Board</h6>
                                </Link>
                            </li>
                        )}
                        {/*{currentUser && (*/}
                        {/*    <li className="nav-item">*/}
                        {/*      <Link to={"/user"} className="nav-link">*/}
                        {/*        <h6 style={{color: textColor}}>User</h6>*/}
                        {/*      </Link>*/}
                        {/*    </li>*/}
                        {/*)}*/}
                        {currentUser && (
                            <li className="nav-item ">
                                <Link to={"/dashboard"} className="nav-link ">
                                    <h6 style={{color: textColor}}>Your Cars</h6>
                                </Link>
                            </li>
                        )}

                    </div>

                    {currentUser ? (
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/profile"} className="nav-link">
                                    <h6 style={{color: textColor}}>{currentUser.username}</h6>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="/login" className="nav-link float-right" onClick={logOut}>
                                    <h6 style={{color: textColor}}>Logout</h6>
                                </a>
                            </li>
                        </div>
                    ) : (
                        <div className="navbar-nav ml-auto ">
                            <li className="nav-item">
                                <Link to={"/login"} className="nav-link">
                                    <h6 style={{color: textColor}}> Login</h6>
                                </Link>
                            </li>
                            <li className="nav-item float-sm-start">
                                <Link to={"/register"} className="nav-link">
                                    <h6 style={{color: textColor}}>Sign Up</h6>
                                </Link>
                            </li>
                        </div>

                    )}
                    <div  className="flags-to-right  ">
                        <img className="img-fluid rounded-circle logo-flag" src={enFlagLogo} alt="English" />
                        <img className="img-fluid rounded-circle logo-flag" src={plFlagLogo} alt="Polish" />
                        <img className="img-fluid rounded-circle logo-flag" src={deFlagLogo} alt="German" />
                    </div>
                </nav>
                {/* <AuthVerify logOut={logOut}/>
     */}

            </div>


        </Container>
    );
};

export default NavBar;