import React, { useState } from 'react';

export function Form() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
  });

  const [showResults, setShowResults] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowResults(true);
  };

  const { name, surname, email } = formData;

  return (
    <div>
      <h2>Formulario 1</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Apellido:</label>
          <input
            type="text"
            id="surname"
            value={surname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {showResults && (
        <div>
          <h3>Nombre: {name}</h3>
          <h3>Apellido: {surname}</h3>
          <h3>Email: {email}</h3>
        </div>
      )}
    </div>
  );
}


