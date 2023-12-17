import { App } from "./App";
import { createRoot } from "react-dom/client";

/* 
const helloWorldElement = <App />;
const rootElemet = document.getElementById("root");
const root = createRoot(rootElemet);
root.render(helloWorldElement); */

createRoot(document.getElementById("root")).render(<App />);
