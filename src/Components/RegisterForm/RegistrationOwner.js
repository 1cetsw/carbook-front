import React, { useState } from 'react';
import axios from 'axios';

const RegistrationOwner = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Tworzenie obiektu z danymi formularza
    const data = {
      name: name,
      surname: surname,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    };

    // Wysyłanie danych na serwer
    axios.post('https://carbook-production.up.railway.app/api/add-owner', data)
      .then(response => {
        console.log('Odpowiedź z serwera:', response.data);
      })
      .catch(error => {
        console.error('Błąd:', error);
      });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form-title">ADD OWNER</h2>

      <input type="text" className="form-input" placeholder="Name" id="name" value={name} onChange={e => setName(e.target.value)} />
      <br />

      <input type="text" className="form-input" placeholder="SurName" id="surname" value={surname} onChange={e => setSurname(e.target.value)} />
      <br />

      <input type="text" className="form-input" placeholder="Email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
      <br />

      <input type="text" className="form-input" placeholder="Password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
      <br />
      <input type="text" className="form-input" placeholder="Confirm Password" id="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationOwner;