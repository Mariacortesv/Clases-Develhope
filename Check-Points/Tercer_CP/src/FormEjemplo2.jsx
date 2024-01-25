import { useState } from "react";

export function FormDos() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ name: "", surname: "", email: "" });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [id]: value }));
  };

  const handleClick = () => {
    if (user.name && user.surname && user.email) {
      setUsers((prevUsers) => [...prevUsers, { ...user }]);
      setUser({ name: "", surname: "", email: "" });
    }
  };

  return (
    <div>
        <div>
        <h2>Formulario 2</h2>
        <label>Email</label>
      <input
        value={user.email}
        onChange={handleChange}
        id={"email"}
        type="email"
        placeholder="email"
      />
      </div>
      <div>
      <label>Name</label>
      <input
        value={user.name}
        onChange={handleChange}
        id={"name"}
        type="text"
        placeholder="name"
      />
      </div>
      <div>
      <label>Surname</label>
      <input
        value={user.surname}
        onChange={handleChange}
        id={"surname"}
        type="text"
        placeholder="surname"
      />
      </div>
    
      <button onClick={handleClick}>Submit</button>
      {users.length > 0 &&
        users.map((user, index) => (
          <div key={index}>
            <h3>{user.name}</h3>
            <h3>{user.surname}</h3>
            <h3>{user.email}</h3>
          </div>
        ))}
    </div>
  );
}
