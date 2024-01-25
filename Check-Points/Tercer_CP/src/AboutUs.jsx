import React, { useState, useEffect } from "react";

const AboutUs = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomUsers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=4");
        if (!response.ok) {
          throw new Error(`error! Status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data.results);
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
      <h3>About Us Page Content</h3>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <div>
          {users.map((user, index) => (
            <div key={index}>
              <img src={user.picture.thumbnail} alt={`User ${index + 1}`} />
              <p>
              Name:{user.name.first} {user.name.last}
              </p>
              <p>
              City: {user.location.city}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AboutUs;
