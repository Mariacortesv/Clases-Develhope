import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());
/* cogera este "url" y llama a fetch dentro de esta url, esto devolvera una
 promesa a traves de la funcion then, recibira la response y  y la devolvera como json esta respuesta
 */

export function useGithubuser2() {
    //se le pasa un url y un fetcher function
    // devolvera un objeto donde cosegeremos la data o el error
    const { data, error, mutate } = useSWR(`https://api.github.com/users`, fetcher);
   
    function handleRefreshUser(){
        mutate()
        // esta funcion activara una nueva solicitud a la API GitHub con datos nuevos
    }
   
    return {
      users: data,
      error,
      isLoading: !data && !error,
      onRefresh: handleRefreshUser,
    };
  }

  //creamos una refresh function