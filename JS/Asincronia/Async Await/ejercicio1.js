// async function getNombre(pokemon){
//     const url=  `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
//     const respuesta = await fetch(url)
//     const json = await respuesta.json()
//     console.log(json.sprites.front_default);
// }

// getNombre("charizard")


// async function getNombre(pokemon){
//     const url=  `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
//     const respuesta = await fetch(url)

//     if(!respuesta.ok){
//         throw new Error("Error, pokemon no existe");
//     }

//     const json = await respuesta.json()
//     console.log(json.sprites.front_default);
// }

// getNombre("charizard")
//     .then(nombre => console.log(nombre))
//     .catch(error=> console.log(error.message))



    async function getNombre(pokemon){
        const url=  `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const respuesta = await fetch(url)
    
        if(!respuesta.ok){
            throw new Error("Error, pokemon no existe");
        }
    
        const json = await respuesta.json()
        return(json.sprites.front_default);
    }


    (async function(){
        try {
            let urlImg = await getNombre("pikachu")
            console.log(urlImg)

            urlImg = await getNombre("limber")
            console.log(urlImg)
        } catch (error) {
            console.log(error.message)
        }
    })();






// //COMO EJECUTAR UNA FUNCION DE UNA VEZ


// (function ejecu(){
//     console.log("HOla")
// })();

