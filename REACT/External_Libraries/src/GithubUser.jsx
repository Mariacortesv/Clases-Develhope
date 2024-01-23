import { useParams } from "react-router";
import { useGithubUser } from "./useGithubUser";

export function GithubUser() {
  const { username } = useParams();

  const { data, loading, error, onFetchUser } = useGithubUser(username);

  function handleGetUserData() {
    onFetchUser();
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
