// ShowGithubUser.js

import React, { useEffect, useState } from 'react';
import { GithubUser } from './GithubUser';

const ShowGithubUser = ({ username }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [username]);

  return (
    <div>
      <h2>User Details for {username}</h2>
      {userData ? <GithubUser data={userData} /> : <p>Loading...</p>}
    </div>
  );
};

export default ShowGithubUser;
