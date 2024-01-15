import { useContext } from "react";
import { LanguageContext } from "./LenguageContext";

export const HelloWorld = () => {
const language = useContext(LanguageContext)

    return <h2>{language === 'en' ? 'Hello World!' : 'Hola Mundo!'}</h2>;
  }
  

  //Queremos acceder a 'language' para cambiar en este caso el idicoma