import { useState } from "react";
import { LanguageContext } from "./LenguageContext";
import { MyContainer } from "./MyContainer";
import { Welcome } from "./Welcome";
import { HelloWorld } from "./Helloworld";
import { GithubUser } from "./GithubUser";
import { HookCounter } from "./CounterHook";
import { useCounter } from "./UseCounter";

export function App() {
  const [language, setLanguage] = useState("en");
  function handleSetLanguage(language) {
    setLanguage(language);
  }

  const {counter,  onIncrement} = useCounter()

  const [ username, setUsername] = useState ('')

  return (
    <div>
      <button onClick={() => handleSetLanguage("es")}>ES</button>
      <button onClick={() => handleSetLanguage("en")}>EN </button>
      <MyContainer title={<h1>Composition</h1>}>
        <LanguageContext.Provider value={language}>
          <HelloWorld />
          <button onClick={onIncrement}>{counter}</button>
          <Welcome name="Maria" />
          <input value={username} onChange={(e) => setUsername(e.target.value)} /> 
          <GithubUser username={username} />
         
         <HookCounter/>
        </LanguageContext.Provider>
      </MyContainer>
    </div>
  );
}

export default App;
