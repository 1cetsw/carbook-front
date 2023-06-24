import React, {useState} from 'react';
import axios from 'axios';
import AuthService from "../../Services/Auth.service";


const NewOtherFixForm = () => {
    const currentUser = AuthService.getCurrentUser();
    const [formData, setFormData] = useState({
        category: '',
        description: '',
        userId: currentUser.id
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(global.config.HostFront + '/api/cars/repairs/', formData)
            .then(response => {
                // Handle success
                console.log(response);
                window.location.href = '/car-details';
            })
            .catch(error => {
                // Handle error
                console.log(error);
            });
    };

    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Add new repair (nie zrobione dodawanie do bazy danych)</h6>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="category">Katergoria:  </label>
                        <select
                            id="repair"
                            name="repair"
                            value={formData.category}
                            onChange={handleChange}
                        >
                            <option value="">Select...</option>
                            <option value="amortyzator">amorek</option>
                            <option value="silnik">silnik</option>

                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Opis: </label>
                        <textarea
                            className="form-control"
                            name="description"

                            placeholder="Tutaj opisz usterke"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </div>


                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default NewOtherFixForm;
