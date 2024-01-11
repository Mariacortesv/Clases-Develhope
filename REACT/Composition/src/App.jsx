import { useState } from "react";
import { LanguageContext } from "./LenguageContext";
import { MyContainer } from "./MyContainer";
import { Welcome } from "./Welcome";
import { HelloWorld } from "./Helloworld";
import { GithubUserClase } from "./GithubUserClase";
import { HookCounter } from "./CounterHook";
import { useCounter } from "./UseCounter";
import { Container } from "./Container";
import { LanguageContextEjercicio } from "./LanguageContextEjercicio";
import { Clock } from "./Clock";
import { GithubUsers } from "./GithubUser";
import { GithubUserEjercicio } from "./GithubUserEjercicio";
import { ControlledForm } from "./ControlledForm";

export function App() {
  const [language, setLanguage] = useState("en");
  function handleSetLanguage(language) {
    setLanguage(language);
  }

  const [selectedLanguage, setSelectedLanguage] = useState("en");

  function handleSetSelectedLanguage(language) {
    setSelectedLanguage(language);
  }

  const { counter, onIncrement } = useCounter();

  const [username, setUsername] = useState("");

  return (
    <div>
      <button onClick={() => handleSetLanguage("es")}>ES</button>
      <button onClick={() => handleSetLanguage("en")}>EN </button>
      <MyContainer title={<h1>Composition Clases</h1>}>
        <LanguageContext.Provider value={language}>
          <HelloWorld />
          <button onClick={onIncrement}>{counter}</button>
          <Welcome name="Maria" />
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <GithubUserClase username={username} />
        </LanguageContext.Provider>
      </MyContainer>
      <hr />
      <div className="ejercicios">
        <h2>Composition Ejercicios</h2>
        <Container
          title={<h2>Ejercicio 1</h2>}
          subtitle={<h3>Component Composition</h3>}
        >
          <h2>hello Maria</h2>
        </Container>
        <hr />
        <h3>Ejercicio 2 - Context</h3>
        <LanguageContextEjercicio.Provider value={selectedLanguage}>
          <Clock />
          <button onClick={() => handleSetSelectedLanguage("es")}>ES</button>
          <button onClick={() => handleSetSelectedLanguage("en")}>EN</button>
        </LanguageContextEjercicio.Provider>
        <h3>Ejercicio 3 y 4 - Data Fetching with fetch and useEffect </h3>
        <h4>Get User</h4>
        <GithubUserEjercicio username={username} />
        <h4>Search User</h4>
        <GithubUsers />
        <h3>Ejercicios - Custom Hooks</h3>
        <h4>1- Counter Hook</h4>
        <HookCounter />
        <h4>2- Controlled Form Hook</h4>
        <ControlledForm />
      </div>
    </div>
  );
}

export default App;
