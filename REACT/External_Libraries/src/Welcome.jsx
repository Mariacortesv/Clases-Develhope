import { useNavigate, useParams } from "react-router-dom";

export function Welcome() {
  const navigate = useNavigate();
  const { name = 'World!' } = useParams();

  function handleLoginButtonClick() {
    navigate("/login");
  }

  return (
    <div>
      <h2>Welcome, {name} ! </h2>
      <button onClick={handleLoginButtonClick}>Enter the app!</button>
    </div>
  );
}

/* <Link to="/login" >Login to the app!</Link> Para link normal*/
