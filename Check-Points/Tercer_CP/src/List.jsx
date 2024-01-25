import React, { useState } from 'react';

export function List() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem.trim()]);
      setNewItem('');
    }
  };

  return (
    <div>
      <h2>Lista de Ítems</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={handleInputChange}
          placeholder="Nuevo ítem"
        />
        <button onClick={handleAddItem}>Agregar</button>
      </div>
    </div>
  );
}


