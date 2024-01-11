import { useState } from "react";
import { LanguageContext } from "./LenguageContext";
import { MyContainer } from "./MyContainer";
import { Welcome } from "./Welcome";
import { HelloWorld } from "./Helloworld";
import { GithubUser } from "./GithubUser";
import { HookCounter } from "./CounterHook";
import { useCounter } from "./UseCounter";
import { Container } from "./Container";
import { LanguageContextEjercicio } from "./LanguageContextEjercicio";
import { Clock } from "./Clock";

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
          <GithubUser username={username} />
          <HookCounter />
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
      </div>
    </div>
  );
}

export default App;
