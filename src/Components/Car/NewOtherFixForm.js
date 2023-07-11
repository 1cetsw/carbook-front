import React, {useState} from 'react';
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";

import categoryList from "../../Common/RepairCategory";
import {Card} from "react-bootstrap";


const NewOtherFix = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const carId = location.state.carId;
    const [date, setDate] = useState('');
    const [course, setCourse] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const titleColor = global.config.FormTitleTextColor;
    const buttonColor = global.config.ButtonColor;
    const formBg=global.config.FormBackgroundColor;

    const formData = {
        carId, date, course, category, description
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(global.config.HostFront + '/api/cars/add-other-repair', formData)
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
            <h4 style={{color: titleColor}}>New Other Fix</h4>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label> Date:</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label> Course: </label>
                    <input type="text" value={course} onChange={(e) => setCourse(e.target.value)}/>
                    km
                </div>
                <div className="form-group">
                    <label> Category: </label>
                    <select
                        value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Select Category</option>
                        {categoryList.map((category) => (<option key={category.category} value={category.category}>
                            {category.category}
                        </option>))}
                    </select>
                </div>
                <div className="form-group">
                    <label> Desciption: </label></div>
                <textarea rows={7} cols={50} value={description} onChange={(e) => setDescription(e.target.value)}/>
                <div>
                    <button type="submit" className={`btn ${buttonColor}`}>Submit</button>
                </div>
            </form>
        </Card>);
};

export default NewOtherFix;