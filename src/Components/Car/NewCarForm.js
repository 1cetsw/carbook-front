import React, {useState} from 'react';
import axios from 'axios';
import AuthService from "../../Services/Auth.service";

import carList from "../../Common/CarList";
import {useTranslation} from "react-i18next";

const NewCarForm = () => {
    const buttonColor=global.config.ButtonColor;
    const titleColor=global.config.TileFontColor;
    const formBg=global.config.FormBackgroundColor;
    const {t} = useTranslation();

    const currentUser = AuthService.getCurrentUser();
    const [carData, setCarData] = useState({
        brand: '',
        model: '',
        vin: '',
        engine:'',
        plate:'',
        course:'',
        nickname:'',
        userId: currentUser.id
    });

    const handleChange = (e) => {
        setCarData({...carData, [e.target.name]: e.target.value},);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(global.config.HostFront + '/api/cars/add', carData)
            .then(response => {
                // Handle success
                console.log(response);
                window.location.href = '/dashboard';
            })
            .catch(error => {
                // Handle error
                console.log(error);
            });
    };


    return (
        <div className="card shadow mb-4" style={{background: formBg}}>
            <h4 style={{color: titleColor}}> Add New Car</h4>

                <form onSubmit={handleSubmit} style={{ color: titleColor}}>
                    <div className="form-group">
                        <div>
                            <div className="card-img-top">
                                {carData.brand && (
                                    <img
                                        src={"https://www.carlogos.org/car-logos/" + carData.brand.toLowerCase().replace(/\s+/g, '-') + "-logo.png"}
                                        class="card-img-top"
                                        alt="CAR LOGO"
                                        style={{width: '150px', height: 'auto'}}
                                    />
                                )}

                            </div>
                        </div>

                        <label for="brand" htmlFor="brand">{t('brand')}: </label>
                        <select
                            id="brand"
                            name="brand"
                            value={carData.brand}
                            onChange={handleChange}
                        >
                            <option value="">{t('selectBrand')}:</option>
                            {carList.map((car) => (
                                <option key={car.brand} value={car.brand}>
                                    {car.brand}
                                </option>
                            ))}
                        </select>

                    </div>
                    <div className="form-group">
                        <label htmlFor="model">{t('model')}:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="model"
                            placeholder={t('enterModel')}
                            value={carData.model}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="vin">VIN:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="vin"
                            placeholder={t('enterVin')}
                            value={carData.vin.toUpperCase()}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="engine">{t('engine')}:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="engine"
                            placeholder={t('enterEngine')}
                            value={carData.engine}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="plateNumber">{t('plate')}:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="plate"
                            placeholder={t('enterPlate')}
                            value={carData.plate.toUpperCase()}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="course">{t('course')} [km] :</label>
                        <input
                            type="text"
                            className="form-control"
                            name="course"
                            placeholder={t('enterCourse')}
                            value={carData.course}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="nickname">{t('nick')} :</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nickname"
                            placeholder={t('enterNick')}
                            value={carData.nickname}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className={`btn ${buttonColor}`}>{t('submit')}</button>
                </form>

        </div>
    );
};

export default NewCarForm;
