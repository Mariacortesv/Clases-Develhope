import { useState } from "react";

export function ListDos() {
  const [items, setItems] = useState(["name", "surname"]);
  const [newItem, setNewItem] = useState("");

  const handleClick = () => {
    if (newItem !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const handleItem = (event) => {
    setNewItem(event.target.value);
  };

  return (
    <div>
      <h2>Ejercicio list</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input type="text" onChange={handleItem} value={newItem} />
      <button onClick={handleClick}> add item</button>
    </div>
  );
}
