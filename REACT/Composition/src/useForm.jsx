import { useState } from "react";

function createData() {
  return {
    username: "",
    password: "",
  };
}

export function useForm() {
  const [formData, setFormData] = useState(createData());

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return {
    formData,
    handleInputChange,
  };
}



/* Create a custom hook that keeps track of 
the state of a controlled form with the 
username and password inputs, and returns 
the current value of the inputs as well as 
an event handler to update either input.*/