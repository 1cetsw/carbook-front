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
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(global.config.HostFront+'/api/cars', formData)
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
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="brand" value={formData.brand} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="text" name="model" value={formData.model} onChange={handleChange} />
      </label>
      <br />
      <label>
        VIN:
        <input type="text" name="vin" value={formData.vin} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewCarForm;