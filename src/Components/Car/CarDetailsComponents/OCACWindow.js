import {Button} from 'react-bootstrap';
import {useTranslation} from "react-i18next";
import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";

const OCACWindow = () => {
    const location = useLocation();
    const carId = location.state.carId;
    const [car, setCar] = useState([]);
    const tileBgColor = global.config.TileBackgroundColor;
    const { t } = useTranslation();
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
            <div className="card shadow" style={{ background: tileBgColor }}>
                <h5 style={{ color: fontColor }}>{t('OCACTitle')}:</h5>

                <div>
                    {renderOCACItem(t, 'OC', car.oc)}
                    {renderOCACItem(t, 'AC', car.ac)}
                    {renderOCACItem(t, 'techExam', car.technicalExamination)}

                    <Link to={"/edit-oc-ac"} state={{ carId: carId }}>
                        <Button className={`${buttonColorAccept}`}>
                            {t('editOCAC')}
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const renderOCACItem = (t, itemName, value) => (
    <>
        <h6 className="card-title" style={{ color: global.config.TileFontColor }}>
            {t(itemName)}:
        </h6>
        <h6 className="card-subtitle">
            {value !== null && value !== undefined && value !== "" ? (
                value
            ) : (
                t('noInfo')
            )}
        </h6>
    </>
);

export default OCACWindow;