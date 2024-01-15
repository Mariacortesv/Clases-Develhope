import { useGithubUser } from "./UseGithubUser";

export function GithubUserClase({ username }) {

  const {data, loading, error,onFetchUser } = useGithubUser(username)

  function handleGetUserData(){
    onFetchUser(username)
  }

  return (
    <div>
      <button onClick={handleGetUserData}> Load user Data</button>
      {loading && <h1> Loading ...</h1>}
      {error && <h1>There Has Been an Error!</h1>}
      {data && <h1> {data.name}</h1>}
    </div>
  );
}

/* Cuando el componente renderice, la variable data estara viacia, pero el efecto 
secundario definido en el callback useEffect sera ejecutado y despues la promesa se resolvera
y tendre el json devuelto desde la API github y tmare el JSON y lo guardare dentro de la 
variable setData */

/* Como la parte de loading esta siempre en true , seguira pasando, debemos hacer un finall,
para que pueda llamar al final a la carga del conjunto, para que siempre sea false al final */

/*  MODO FETCH
  { useEffect(() => {
    setLoading(true);
    setError(null); //lo establecemos antes de empezar a cargar para no mantener el error si se cambia el nombre
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (response.status !== 200) {
          setError(new Error("User not Found"));
        }
        return response.json();
      })
      .then((json) => {
        //console.log(json);
        //setLoading(false);
        setData(json);
      })
      .catch((error) => {
        setError(error);
      }) //Si pasa otro tipo de error
      .finally(() => {
        setLoading(false);
      });
  }, [username]);} */
