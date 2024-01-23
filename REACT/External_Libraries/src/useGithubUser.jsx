import useSWR from "swr";

export function useGithubUser(username) {
 

const {data, error, mutate} =  useSWR(`${process.env.REACT_APP_SERVER_URL}/users/${username}`)

function fetchGithubUser(){
  mutate()
}

  return {
    data,
    error,
    loading: !data && !error,
    onFetchUser : fetchGithubUser
  };
}


// Ejercicios Custom Hooks 3 y 4
// al configurar el fetcher en la root no lo necesitmaos mas aqui
// podemos pasar en este segundo pasametro cualquier otra cosa tambien entre {}