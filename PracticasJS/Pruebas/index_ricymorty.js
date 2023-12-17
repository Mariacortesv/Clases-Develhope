const basicURL = "https://rickandmortyapi.com/api/character";
const contenedor = document.querySelector("#contenedor");

fetch(basicURL)
    .then((res) => res.json())
    .then((objeto) => objeto.results)
    .then((personajes) => personajes.forEach(personaje => {
        console.log(personaje)
        const card = document.createElement("div")
        card.className = "cardCompleta"
        const top_card = document.createElement("div")
        const bot_card = document.createElement("div")
        const imagen_card = document.createElement("img")
        imagen_card.setAttribute("src", personaje.image)
        const titulo = document.createElement("h4")
        titulo.className = "titulo"
        titulo.textContent = personaje.name
        const subtitulo = document.createElement("p")
        subtitulo.className = "subtitulo"
        subtitulo.textContent = personaje.species
        contenedor.appendChild(card)
        card.appendChild(top_card)
        card.appendChild(bot_card)
        top_card.appendChild(imagen_card)
        bot_card.appendChild(titulo)
        bot_card.appendChild(subtitulo)
    }))
    .catch((err) => console.error(err))