async function obtenerUsuarioGitHub() {
    try {
      const username = prompt("Ingrese el nombre de usuario de GitHub:");
  
      if (!username) {
        // Si el usuario no ingresó un nombre, salimos de la función
        return;
      }
  
      const response = await fetch(`https://api.github.com/users/${username}`);
  
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
  
      const userData = await response.json();
      console.log(userData)
  
      // Construir la información a mostrar
      const infoUsuario = `Nombre: ${userData.name || "No disponible"}\n
                          Bio: ${userData.bio || "No disponible"}\n
                          Repositorios públicos: ${userData.public_repos || 0}\n
                          Seguidores: ${userData.followers || 0}\n
                          Siguiendo: ${userData.following || 0}`;
  
      // Mostrar la información dentro del contenedor
      const contenedor = document.getElementById("contenedor");
      contenedor.textContent = infoUsuario;
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  