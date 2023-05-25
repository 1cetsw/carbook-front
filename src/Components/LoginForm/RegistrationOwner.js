import React, { useState } from 'react';
import axios from 'axios';

const RegistrationOwner = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();

    // Tworzenie obiektu z danymi formularza
    const data = {
      name: name,
      surname: surname,
      email: email,
      password: password
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
    <form class="form" onSubmit={handleSubmit}>
        <h2 class="form-title">ADD OWNER</h2>
      
      <input type="text"  class="form-input" placeholder="Name" id="name" value={name} onChange={e => setName(e.target.value)} />
      <br />
      
      <input type="text" class="form-input" placeholder="SurName" id="surname" value={surname} onChange={e => setSurname(e.target.value)} />
      <br />
      
      <input type="text" class="form-input" placeholder="Email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
      <br />
      
      <input type="text" class="form-input" placeholder="Password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
      <br />
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationOwner;