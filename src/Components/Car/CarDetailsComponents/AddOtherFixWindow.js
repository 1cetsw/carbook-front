
import {useTranslation} from "react-i18next";
import React from "react";
import {Link, useLocation} from "react-router-dom";


const AddExploitationServiceWindow = () => {
    const {t} = useTranslation();
    const fontColor = global.config.TileFontColor;
    const tileBgColor = global.config.TileBackgroundColor;
    const location = useLocation();
    const carId = location.state.carId;



    return (

        <div className="col-md-3">
            <div className="card mb-3 shadow text-center" style={{background: tileBgColor}}>

                <Link to="/add-other-fix" state={{carId: carId}} style={{textDecoration: 'none'}}>
                    <img src="https://cdn-icons-png.flaticon.com/512/226/226537.png"
                         className="card-img-top"
                         alt="Add Other Fix"
                         style={{width: '160px', height: 'auto'}}
                    />
                    <h5 style={{color: fontColor}}>{t('addOtherFix')}</h5></Link>
            </div>
        </div>
    )
}

export default AddExploitationServiceWindow;

