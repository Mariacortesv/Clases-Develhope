async function getTodos() {
    let url = 'https://jsonplaceholder.typicode.com/todos';
  
    try {
      let response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
  
      let todos = await response.json();
      return todos;
    } catch (error) {
      console.error('Error');
      throw error;
    }
  }
  
  async function fetchData() {
    try {
      let todos = await getTodos();
      console.log('Lista de Todos:', todos);
    } catch (err) {
    }
  }
  
  fetchData();
  