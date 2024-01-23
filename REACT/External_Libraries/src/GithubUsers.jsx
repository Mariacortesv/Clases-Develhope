import { Link, Outlet } from "react-router-dom";
import { useGithubuser2 } from "./useGithubUser2";

export function GithubUsers() {
  const { users, error, isLoading, onRefresh } = useGithubuser2();

  return (
    <div>
      <button onClick={onRefresh}>Refresh</button>
      <h2>Data Fetching with SWR</h2>
      {/* si no tenemos datos y no hay error, estamos loading  */}
      {isLoading && <h3>Loading...</h3>}
      {/* si hay error mostrar otro mensaje */}
      {error && <h3>An error has ocurred</h3>}
      {/* si tenemos data pero no error mostrara una lista con los datos */}
      {users && !error && (
        <ul>
          {users.map((user) => (
            <li key={user.login}>
              <Link to={`/users/${user.login}`}>{user.login}</Link>
            </li>
          ))}
        </ul>
      )}

      <Outlet />
    </div>
  );
}
