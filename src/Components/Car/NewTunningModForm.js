import React, {useState} from 'react';
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";
import {Card} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import categoryTuningList from "../../Common/TuningCategory";


const NewTunningModForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const carId = location.state.carId;
    const [date, setDate] = useState('');
    const [course, setCourse] = useState('');
    const [tuningCategory, setTuningCategory] = useState('');
    const [description, setDescription] = useState('');
    const titleColor = global.config.TileFontColor;
    const buttonColorAccept = global.config.ButtonColorAccept;
    const formBg=global.config.FormBackgroundColor;
    const {t} = useTranslation();
    const formData = {
        carId, date, course, category: tuningCategory, description
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(global.config.HostFront + '/api/cars/add-tuning-mod', formData)
            .then(response => {
                // Handle success
                console.log(response);
                navigate(`/car-details`, {state: {carId: carId}});
            })
            .catch(error => {
                // Handle error
                console.log(error);
            });
    };

    return (
        <Card style={{background: formBg}}>
            <h4 style={{color: titleColor}}>{t('newTuningMod')}</h4>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label> {t('date')}:</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label> {t('course')}: </label>
                    <input type="text" value={course} onChange={(e) => setCourse(e.target.value)}/>
                    km
                </div>
                <div className="form-group">
                    <label> {t('category')}: </label>
                    <select
                        value={tuningCategory} onChange={(e) => setTuningCategory(e.target.value)}>
                        <option value="">{t('selectCategory')}</option>
                        {categoryTuningList.map((category) => (<option key={category.category} value={category.category}>
                            {category.category}
                        </option>))}
                    </select>
                </div>
                <div className="form-group">
                    <label> {t('modificationDescription')}: </label></div>
                <textarea rows={7} cols={50} value={description} onChange={(e) => setDescription(e.target.value)}/>
                <div>
                    <button type="submit" className={`btn ${buttonColorAccept}`}>{t('submit')}</button>
                </div>
            </form>
        </Card>);
};

export default NewTunningModForm;