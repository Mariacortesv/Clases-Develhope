import { useGithubUser } from "./UseGithubUser";

export function GithubUserEjercicio({ username }) {
  const { data, loading, error, onFetchUser } = useGithubUser(username);

  function handleGetUserData() {
    onFetchUser(username);
  }

  return (
    <div>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={handleGetUserData}> Load user Data</button>
      {loading && <h1> Loading ...</h1>}
      {error && <h1>There Has Been an Error!</h1>}
      {data && (
        <div>
          <h1>{data.name}</h1>
          <p>Login: {data.login}</p>
          <img src={data.avatar_url} alt="User Avatar" />
        </div>
      )}
    </div>
  );
}
