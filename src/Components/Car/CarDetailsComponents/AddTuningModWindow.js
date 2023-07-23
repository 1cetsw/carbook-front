import tuningLogo from '../../../Assets/Images/Icons/tuning.png'
import {useTranslation} from "react-i18next";
import React from "react";
import {Link, useLocation} from "react-router-dom";


const AddTuningModWindow = () => {
    const {t} = useTranslation();
    const fontColor = global.config.TileFontColor;
    const tileBgColor = global.config.TileBackgroundColor;
    const location = useLocation();
    const carId = location.state.carId;



    return (

        <div className="col-md-3">
            <div className="card mb-3 shadow text-center" style={{background: tileBgColor}}>

                <Link to="/add-tunning-mod" state={{carId: carId}} style={{textDecoration: 'none'}}>
                    <img src={tuningLogo}
                         className="card-img-top"
                         alt="Add Other Fix"
                         style={{width: '200px', height: 'auto'}}
                    />
                    <h5 style={{color: fontColor}}>{t('addTuningMod')}</h5></Link>
            </div>
        </div>
    )
}

export default AddTuningModWindow;

