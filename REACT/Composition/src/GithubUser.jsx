import React, { useState } from "react";
import { GithubUserEjercicio } from "./GithubUserEjercicio";
import { useGithubUser } from "./UseGithubUser.jsx"

export function GithubUsers() {
  const [username, setUsername] = useState("");
  const { data, loading, error, onFetchUser } = useGithubUser(username);
  const [users, setUsers] = useState([]);

  const handleSearchUser = async () => {
    try {
      await onFetchUser(username);
      setUsers((prevUsers) => [...prevUsers, username]);
      setUsername("");
    } catch (error) {
      console.error("User not found", error);
    }
  };

  const handleReset = () => {
    setUsers([]);
    setUsername("");
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearchUser}>Search</button>
      <button onClick={handleReset}>Reset</button>

      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <GithubUserEjercicio username={user} />
          </li>
        ))}
      </ul>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <GithubUserEjercicio username={data.login} />}

    </div>
  );
}
