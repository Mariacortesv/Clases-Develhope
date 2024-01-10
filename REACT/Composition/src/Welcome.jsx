import { HelloWorld } from "./Helloworld";

export function Welcome({ name }) {
  const WelcomeStyle = {
    backgroundColor: name ? "greenyellow" : 'darkgrey',
    color: name ? "#333" : '#fff',
  };

  return (
    <div style={WelcomeStyle}>
      {name ? <h2>Welcome, {name} ! </h2> : <HelloWorld />}
    </div>
  );
}


