import useSWR from "swr";

export function useGithubUser(username) {
  // Check if the username is null or undefined
  if (username === null || username === undefined) {
    return {
      data: null,
      error: null,
      loading: false,
      refetch: () => {},
    };
  }

  const { data, error, mutate } = useSWR(`${process.env.REACT_APP_SERVER_URL}/users/${username}`);

  function fetchGithubUser() {
    mutate();
  }

  return {
    data,
    error,
    loading: !data && !error,
    refetch: fetchGithubUser,
  };
}



// Ejercicios Custom Hooks 3 y 4
// al configurar el fetcher en la root no lo necesitmaos mas aqui
// podemos pasar en este segundo pasametro cualquier otra cosa tambien entre {}
//Ejercicio SWR 1-2-3