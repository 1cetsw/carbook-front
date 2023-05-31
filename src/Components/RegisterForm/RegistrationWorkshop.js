import React, { useState } from 'react';
import axios from 'axios';


const RegistrationWorkshop = () => {
  const [workshopName, setWorkshopName] = useState('');
  const [workshopOwner, setWorkshopOwner] = useState('');
  const [workshopAddress, setWorkshopAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassowrd] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Tworzenie obiektu z danymi formularza
    const data = {
      workshopName: workshopName,
      workshopOwner: workshopOwner,
      workshopAdress: workshopAddress,
      workshopPhone: phone,
      workshopEmail: email,
      workshopPassowrd: password,
      workshopConfirmPassowrd: confirmPassword,

    }


    // Wysyłanie danych na serwer
    axios.post(global.config.HostApi+'/api/add-workshop', data)
      .then(response => {
        console.log('Odpowiedź z serwera:', response.data);
      })
      .catch(error => {
        console.error('Błąd:', error);
      });
  };


  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form-title">ADD WORKSHOP</h2>

      <input type="text" className="form-input" placeholder="Workshop Name" id="workshopName" value={workshopName} onChange={e => setWorkshopName(e.target.value)} />
      <br />

      <input type="text" className="form-input" placeholder="Workshop Owner" id="workshopOwner" value={workshopOwner} onChange={e => setWorkshopOwner(e.target.value)} />
      <br />

      <input type="text" className="form-input" placeholder="Workshop Address" id="workshopAddress" value={workshopAddress} onChange={e => setWorkshopAddress(e.target.value)} />
      <br />

      <input type="text" className="form-input" placeholder="Phone" id="phone" value={phone} onChange={e => setPhone(e.target.value)} />
      <br />
      <input type="text" className="form-input" placeholder="Email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
      <br />
      <input type="text" className="form-input" placeholder="Password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
      <br />
      <input type="text" className="form-input" placeholder="Confirm Password" id="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassowrd(e.target.value)} />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationWorkshop;