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
            .then((response) => response.json())
            .then((data) => {
                setCar(data);
                console.log(data);
            })
            .catch((error) => {
                console.log('Error fetching data:', error);
            });
    }, [carId]);

    const getColor = (daysLeft) => {
        if (daysLeft <= 0) {
            return 'red'; // dni po terminie
        } else if (daysLeft <= 10) {
            return 'red';
        } else if (daysLeft <= 30) {
            return 'yellow';
        } else {
            return 'lightgreen';
        }
    };

    const daysUntil = (targetDate) => {
        const currentDate = new Date();
        const targetDateTime = new Date(targetDate).getTime();
        const timeDiff = targetDateTime - currentDate.getTime();
        const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

        return daysLeft;
    };

    const OCACItem = ({ itemName, value, targetDate }) => {
        const { t } = useTranslation();
        const daysLeft = daysUntil(targetDate);
        const color = getColor(daysLeft);

        return (
            <>
                <h6 className="card-title" style={{ color: global.config.TileFontColor }}>
                    {t(itemName)}:
                </h6>
                <h6 className="card-subtitle">
                    {value !== null && value !== undefined && value !== '' ? (
                        value
                    ) : (
                        t('noInfo')
                    )}
                </h6>
                {daysLeft <= 0 ? (
                    <p style={{ color: 'red' }}>{Math.abs(daysLeft)} {t('daysPastDue')} </p>
                ) : (
                    <h7 style={{ color: color }}>
                        {daysLeft} {t('daysleft')}
                    </h7>
                )}
            </>
        );
    };

    return (
        <div className="col-md-4">
            <div className="card shadow" style={{ background: tileBgColor }}>
                <h5 style={{ color: fontColor }}>{t('OCACTitle')}:</h5>

                <div>
                    <OCACItem itemName="OC" value={car.oc} targetDate={car.oc} />
                    <OCACItem itemName="AC" value={car.ac} targetDate={car.ac} />
                    <OCACItem itemName="techExam" value={car.technicalExamination} targetDate={car.technicalExamination} />
                    <p></p>
                    <Link to={'/edit-oc-ac'} state={{ carId: carId }}>
                        <Button className={`${buttonColorAccept}`}>{t('editOCAC')}</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OCACWindow;