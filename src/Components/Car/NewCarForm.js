import React, { useState } from 'react';
import axios from 'axios';
import AuthService from "../../Services/Auth.service";


const NewCarForm = () => {
    const currentUser = AuthService.getCurrentUser();
    const [formData, setFormData] = useState({
        brand: '',
        model: '',
        vin: '',
        userId: currentUser.id
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(global.config.HostFront + '/api/cars', formData)
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
                <h6 className="m-0 font-weight-bold text-primary">Add new</h6>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="brand" htmlFor="brand">Brand: </label>
                        <select
                            id="brand"
                            name="brand"
                            value={formData.brand}
                            onChange={handleChange}
                        >

                            <optgroup label="German Cars">

                                <option value="audi">Audi</option>
                                <option value="bentley">Bentley</option>
                                <option value="bugatti">Bugatti</option>
                                <option value="bmw">BMW</option>
                                <option value="porsche">Porsche</option>
                                <option value="lamborghini">Lamborghini</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="mini">Mini</option>
                                <option value="opel">Opel</option>
                                <option value="porsche">Porsche</option>
                                <option value="rollsroyce">Rolls-Royce</option>
                                <option value="seat">Seat</option>
                                <option value="skoda">Škoda</option>
                                <option value="vw">Volkswagen</option>

                            </optgroup>
                            <optgroup label="Swedish Cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                            </optgroup>
                            
                            <optgroup label="Japan Cars">
                                <option value="acura">Acura</option>
                                <option value="daihatsu">Daihatsu</option>
                                <option value="honda">Honda</option>
                                <option value="infiniti">Infiniti</option>
                                <option value="isuzu">Isuzu</option>
                                <option value="lexus">Lexus</option>
                                <option value="mazda">Mazda</option>
                                <option value="mitsubishi">Mitsubishi</option>
                                <option value="nissan">Nissan</option>
                                <option value="subaru">Subaru</option>
                            </optgroup>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="model">Model</label>
                        <input
                            type="text"
                            className="form-control"
                            name="model"
                            placeholder="Enter model name"
                            value={formData.model}
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
                            value={formData.vin}
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
                            value={formData.engine}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div >
        </div >
    );
};

export default NewCarForm;
