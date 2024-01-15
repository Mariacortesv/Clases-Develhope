import { MyList } from "./MyList";
import { MyListTwo } from "./MyListTwo";
import { MyForm } from "./Myform";
import { UncontrolledFrom } from "./UncontrolledForm";
import { Welcome } from "./Welcome";
import { InteractiveWelcome } from "./InteractiveWelcome.jsx";
import { MyLoginData } from "./Login.jsx";
import { MyUncontrolledLogin } from "./UncontrolledLogin.jsx";
import { FocusableInput } from "./FocusableInput.jsx";
import { Counter } from "./CounterRef.jsx";
import { Colors } from "./Colors.jsx";
import { TodoList } from "./TodoList.jsx";
import { Clock } from "./Clock.jsx";

function App() {
  const colorsData = [
    { id: 1, name: "Rojo" },
    { id: 2, name: "Verde" },
    { id: 3, name: "Azul" },
  ];
  return (
    <div className="app">
      <h1>Forms, Lists and Styling</h1>
      <MyForm />
      <hr />
      <UncontrolledFrom />
      <hr />
      <h2>My List</h2>
      <MyList items={["Jame", "Kate", "Billy", "Jame"]} />
      <h2>My List Two</h2>
      <MyListTwo
        items={[
          { id: 1, name: "Jesus", age: 50 },
          { id: 2, name: "David", age: 23 },
          { id: 3, name: "Maria", age: 30 },
          { id: 4, name: "Jesus", age: 41 },
          { id: 5, name: "Sofia", age: 28 },
        ]}
      />
      <hr />
      <h2>Controlled Forms Ejercicios</h2>
      <InteractiveWelcome />
      <MyLoginData />
      <h2>Uncontrolled Forms Ejercicios</h2>
      <MyUncontrolledLogin />
      <h2>Refs Ejercicios</h2>
      <FocusableInput />
      <Counter />
      <h2>Lists & State Ejercicios</h2>
      <Colors colorArray={colorsData} />
      <TodoList/>
      <hr />
      <h2>Styling Components Ejercicios</h2>
      <Welcome name="Maria" />
      <Clock/>
    </div>
  );
}

export default App;

// en mylisttwo pondremos un array de objetos que se compara mas con la vida real
