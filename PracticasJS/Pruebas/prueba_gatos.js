async function loadCat() {
    let container = document.getElementById ('cat-contenedor');
    let res = await fetch ('https://api.thecatapi.com/v1/images/search?limit=5');
    let json = await res.json()
    let cats = json.forEach(cat => {
        let titulo = document.createElement("p")
        titulo.textContent = `${json.indexOf(cat)}` ;
    let img = document.createElement ('img');
    let catDescription = document.createElement('h3')
    catDescription.textContent = `URL of the cat is: ${cat.url}`
    img.height = '600'
    img.width= '600'
    img.src = cat.url;
    container.appendChild(titulo)
    container.appendChild(catDescription)
    container.appendChild (img);
    });
}

// de que si es un array de objetos usar el foreach
// si es solo un objeto, como lo hizo el pana