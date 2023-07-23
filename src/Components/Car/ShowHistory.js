import React from "react";
import {Link, useLocation} from 'react-router-dom';
import {useTranslation} from "react-i18next";
import tuningHisoryLogo from '../../Assets/Images/Icons/tuninghistory.png'
import exploitationHistoryLogo from '../../Assets/Images/Icons/exploitationhistory.png'
import otherHisoryLogo from '../../Assets/Images/Icons/otherhistory.png'

const ShowHistory = () => {
    const fontColor= global.config.TileFontColor;
    const tileBgColor= global.config.TileBackgroundColor;
    const {t} = useTranslation();
    const location = useLocation();
    const carId = location.state.carId;

    return (
        <div className="container" >
            <div className="row" >
                    <div>
                    <div className="card mb-3 shadow text-center" style={{background: tileBgColor}}>

                        <Link to={"/exploitation-history"} state={{carId: carId}} style={{textDecoration: 'none'}}>
                            <img
                                src={exploitationHistoryLogo}
                                className="card-img-top"
                                alt="Show Exploitation History"
                                style={{width: '200px', height: 'auto'}}
                            />
                            <h5 style={{color: fontColor}}>{t('showExploitationHistory')}</h5>
                        </Link>
                    </div>



                <div>
                    <div className="card mb-3 shadow text-center" style={{background: tileBgColor}}>

                        <Link to={"/other-repair-history"} state={{carId: carId}} style={{textDecoration: 'none'}}>
                            <img
                                src={otherHisoryLogo}
                                className="card-img-top"
                                alt="Show Other History"
                                style={{width: '200px', height: 'auto'}}
                            />
                            <h5 style={{color: fontColor}}>{t('showOtherHistory')}</h5>
                        </Link>

                    </div>
                </div>

                        <div>
                            <div className="card mb-3 shadow text-center" style={{background: tileBgColor}}>

                                <Link to={"/tuning-mod-history"} state={{carId: carId}} style={{textDecoration: 'none'}}>
                                    <img
                                        src={tuningHisoryLogo}
                                        className="card-img-top"
                                        alt="Show Tuning History"
                                        style={{width: '200px', height: 'auto'}}
                                    />
                                    <h5 style={{color: fontColor}}>{t('showTuningHistory')}</h5>
                                </Link>

                            </div>
                        </div>
            </div>
        </div>
        </div>
    )

};

export default ShowHistory;