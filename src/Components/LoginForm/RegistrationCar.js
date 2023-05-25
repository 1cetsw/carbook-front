import React, { useState } from 'react';
import axios from 'axios';

const RegistrationCar = () => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [productionDate, setProductionDate] = useState('');

 
  const handleSubmit = (e) => {
    e.preventDefault();

    // Tworzenie obiektu z danymi formularza
    const data = {
      brand: brand,
      model: model,
      productionDate: productionDate,
  
    };

    // Wysyłanie danych na serwer
    axios.post('https://carbook-production.up.railway.app/api/add-car', data)
      .then(response => {
        console.log('Odpowiedź z serwera:', response.data);
      })
      .catch(error => {
        console.error('Błąd:', error);
      });
  };

  return (
    <form class="form" onSubmit={handleSubmit}>
        <h2 class="form-title">ADD OWNER</h2>
      
      <input type="text"  class="form-input" placeholder="Brand" id="brand" value={brand} onChange={e => setBrand(e.target.value)} />
      <br />
      
      <input type="text" class="form-input" placeholder="Model" id="model" value={model} onChange={e => setModel(e.target.value)} />
      <br />
      
      <input type="text" class="form-input" placeholder="Production Date" id="prductionDate" value={productionDate} onChange={e => setProductionDate(e.target.value)} />
      <br />
      
     
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationCar;