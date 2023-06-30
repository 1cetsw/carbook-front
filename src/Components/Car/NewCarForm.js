import React, {useState} from 'react';
import axios from 'axios';
import AuthService from "../../Services/Auth.service";

import carList from "../../Common/CarList";

const NewCarForm = () => {
    const currentUser = AuthService.getCurrentUser();
    const [carData, setCarData] = useState({
        brand: '',
        model: '',
        vin: '',
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
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Add new car</h6>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">


                        <div>

                            <div className="card-img-top">
                                {carData.brand && (
                                    <img
                                        src={"https://www.carlogos.org/car-logos/" + carData.brand.toLowerCase() + "-logo.png"}
                                        class="card-img-top"
                                        alt="Logo samochodu"
                                        style={{width: '200px', height: 'auto'}}
                                    />
                                )}
                                <div className="card-body ">

                                </div>
                            </div>
                        </div>


                        <label for="brand" htmlFor="brand">Brand: </label>
                        <select
                            id="brand"
                            name="brand"
                            value={carData.brand}
                            onChange={handleChange}
                        >
                            <option value="">Select Brand</option>
                            {carList.map((car) => (
                                <option key={car.brand} value={car.brand}>
                                    {car.brand}
                                </option>
                            ))}

                        </select>

                    </div>
                    <div className="form-group">
                        <label htmlFor="model">Model</label>
                        <input
                            type="text"
                            className="form-control"
                            name="model"
                            placeholder="Enter model name"
                            value={carData.model}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="vin">Vin number</label>
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
                        <label htmlFor="engine">Engine</label>
                        <input
                            type="text"
                            className="form-control"
                            name="engine"
                            placeholder="Enter your engine size and code "
                            value={carData.engine}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default NewCarForm;
