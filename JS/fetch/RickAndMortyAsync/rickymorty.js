
async function getinfo(){
    const url=  `https://rickandmortyapi.com/api/character`;
    const respuesta = await fetch(url)
    const json = await respuesta.json()
    for(let i=0;i<=json.results.length;i++){
        try {
            pintarHtml(json,i)
        } catch (error) {
            console.log(error.message)
        }
        
    }
    
}

function pintarHtml(data,i){
    main = document.querySelector("main")
    container = document.createElement("div")
    imagen = document.createElement("img")
    imagen.setAttribute("src",data.results[i].image)
    parrafo1 = document.createElement("p")
    parrafo1.textContent = data.results[i].name
    parrafo2 = document.createElement("p")
    parrafo2.textContent = data.results[i].status      
    main.appendChild(container)
    container.appendChild(imagen)
    container.appendChild(parrafo1)
    container.appendChild(parrafo2)
}

getinfo()

