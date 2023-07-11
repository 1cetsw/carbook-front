import React, {useState} from 'react';
import axios from 'axios';
import AuthService from "../../Services/Auth.service";

import carList from "../../Common/CarList";

const NewCarForm = () => {
    const buttonColor=global.config.ButtonColor;
    const titleColor=global.config.FormTitleTextColor;
    const formBg=global.config.FormBackgroundColor;


    const currentUser = AuthService.getCurrentUser();
    const [carData, setCarData] = useState({
        brand: '',
        model: '',
        vin: '',
        engine:'',
        plate:'',
        course:'',
        userId: currentUser.id
    });

    const handleChange = (e) => {
        setCarData({...carData, [e.target.name]: e.target.value});
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

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div>
                            <div className="card-img-top">
                                {carData.brand && (
                                    <img
                                        src={"https://www.carlogos.org/car-logos/" + carData.brand.toLowerCase() + "-logo.png"}
                                        class="card-img-top"
                                        alt="Logo samochodu"
                                        style={{width: '150px', height: 'auto'}}
                                    />
                                )}

                            </div>
                        </div>

                        <label for="brand" htmlFor="brand">Brand: </label>
                        <select
                            id="brand"
                            name="brand"
                            value={carData.brand}
                            onChange={handleChange}
                        >
                            <option value="">Select Car Brand:</option>
                            {carList.map((car) => (
                                <option key={car.brand} value={car.brand}>
                                    {car.brand}
                                </option>
                            ))}
                        </select>

                    </div>
                    <div className="form-group">
                        <label htmlFor="model">Model:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="model"
                            placeholder="Enter Car Model"
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
                            placeholder="Enter VIN number"
                            value={carData.vin}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="engine">Engine:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="engine"
                            placeholder="Engine Size / Code"
                            value={carData.engine}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="plateNumber">Plate Number:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="plate"
                            placeholder="Plate Number"
                            value={carData.plate}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="course">Course [km] :</label>
                        <input
                            type="text"
                            className="form-control"
                            name="course"
                            placeholder="Course your car '12000'"
                            value={carData.course}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className={`btn ${buttonColor}`}>Submit</button>
                </form>

        </div>
    );
};

export default NewCarForm;
