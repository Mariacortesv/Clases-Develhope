import React, { useState, useEffect } from "react";
import { Card } from "./Card";

export function LlamadaApi() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomUsers = async () => {
      try {
        const response = await fetch(
          "https://random-data-api.com/api/users/random_user?size=4"
        );
        if (!response.ok) {
          throw new Error(`Error! Status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching random users:", error.message);
        setLoading(false);
      }
    };

    fetchRandomUsers();
  }, []);

  return (
    <div>
      <h3>Llamada API Ejemplo: Usuarios</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {users.map((user, index) => (
            <Card key={index} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}
