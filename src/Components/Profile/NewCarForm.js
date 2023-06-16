import React, { useState } from 'react';
import axios from 'axios';

const NewCarForm = () => {
    const [formData, setFormData] = useState({
        brand: '',
        model: '',
        vin: '',
        userId: '008df606-01dc-4b1b-83b1-2d101d97f0ea'
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
                        <label htmlFor="brand">Brand</label>
                        <input
                            type="text"
                            className="form-control"
                            name="brand"
                            placeholder="Enter brand name"
                            value={formData.brand}
                            onChange={handleChange}
                        />
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
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
    };
    //   return (
    //     <form onSubmit={handleSubmit}>
    //       <label>
    //         Name:
    //         <input type="text" name="brand" value={formData.brand} onChange={handleChange} />
    //       </label>
    //       <br />
    //       <label>
    //         Email:
    //         <input type="text" name="model" value={formData.model} onChange={handleChange} />
    //       </label>
    //       <br />
    //       <label>
    //         VIN:
    //         <input type="text" name="vin" value={formData.vin} onChange={handleChange} />
    //       </label>
    //       <br />
    //       <button type="submit">Submit</button>
    //     </form>
    //   );
    // };

    export default NewCarForm;