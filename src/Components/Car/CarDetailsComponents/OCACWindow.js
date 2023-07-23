import {Button} from 'react-bootstrap';
import {useTranslation} from "react-i18next";
import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";


const OCACWindow = () => {

    const location = useLocation();
    const carId = location.state.carId;
    const [car, setCar] = useState([]);
    const tileBgColor = global.config.TileBackgroundColor;
    const {t} = useTranslation();
    const fontColor = global.config.TileFontColor;
    const buttonColorAccept = global.config.ButtonColorAccept;


    useEffect(() => {
        fetch(global.config.HostFront + '/api/cars/car/' + carId)
            .then(response => response.json())
            .then(data => {
                setCar(data);
                console.log(data);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
    }, [carId]);


    return (
        <div className="col-md-4">
            <div className="card shadow" style={{background: tileBgColor}}>
                <h5 style={{color: fontColor}}>{t('OCACTitle')}:</h5>

                <div>
                    <h6 className="card-title" style={{color: fontColor}}> OC:</h6>
                    <h6 className="card-subtitle">  {car.oc}</h6>
                    <h6 className="card-title" style={{color: fontColor}}> AC:</h6>
                    <h6 className="card-subtitle">  {car.ac}</h6>
                    <h6 className="card-title" style={{color: fontColor}}> {t('techExam')}:</h6>
                    <h6 className="card-subtitle"> {car.technicalExamination}</h6>
                    <Link to={"/edit-oc-ac"} state={{carId: carId}}>
                        <Button className={`${buttonColorAccept}`}>
                            {t('editOCAC')}
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default OCACWindow;

