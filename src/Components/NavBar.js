import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "../Css/App.css";
import carbookLogo from '../Assets/Images/carbook.png';
import {useTranslation} from 'react-i18next';
import LanguageSelector from "../Common/LanguageSelector";
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
    const {t} = useTranslation();

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
                                    <h6 style={{color: textColor}}> {t('workshopBoard')}</h6>
                                </Link>
                            </li>
                        )}
                        {showAdminBoard && (
                            <li className="nav-item">
                                <Link to={"/adminboard"} className="nav-link">
                                    <h6 style={{color: textColor}}>{t('adminBoard')}</h6>
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
                                    <h6 style={{color: textColor}}>{t('yourCars')}</h6>
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
                                <a href="/" className="nav-link float-right" onClick={logOut}>
                                    <h6 style={{color: textColor}}>{t('logout')}</h6>
                                </a>
                            </li>
                        </div>
                    ) : (
                        <div className="navbar-nav ml-auto ">
                            <li className="nav-item">
                                <Link to={"/login"} className="nav-link">
                                    <h6 style={{color: textColor}}> {t('login')}</h6>
                                </Link>
                            </li>
                            <li className="nav-item float-sm-start">
                                <Link to={"/register"} className="nav-link">
                                    <h6 style={{color: textColor}}>{t('signup')}</h6>
                                </Link>
                            </li>
                        </div>

                    )}
                    <LanguageSelector/>

                </nav>
                {/* <AuthVerify logOut={logOut}/>
     */}

            </div>

        </Container>
    );
};

export default NavBar;