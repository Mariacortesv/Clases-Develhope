import { useEffect, useState } from "react";

export function useGithubUser() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchGithubUser(username) {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();

      // creamos una condicion
      if ( response.status !== 200){
        setError(new Error())
      }
      setData(json);
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

/*  Quitamos para que no se ponga automatico
useEffect(() => {
    fetchGithubUser(username);
  }, [username]);  */
  return {
    data,
    error,
    loading,
    onFetchUser : fetchGithubUser
  };
}


// Ejercicios Custom Hooks 3 y 4