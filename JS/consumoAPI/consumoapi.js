
// function getNombre(user){
//     const url=  `https://api.github.com/users/${user}`;

//     fetch(url)
//         .then(respuesta => respuesta.json())
//         .then(json =>{
//             console.log(json.name)
//         })
//         .catch(err =>{
//             console.log(err.message)
//         })
// }


// getNombre("christiancelis")



async function getNombre(user){
    const url=  `https://api.github.com/users/${user}`;
    const respuesta = await fetch(url)
    const json = await respuesta.json()
    console.log(json)
    
}

getNombre("christiancelis")