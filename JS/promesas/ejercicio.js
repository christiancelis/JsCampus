// const datos =[
//     {
//         id:1,
//         title:"Iron Man",
//         year: 2008
//     },
//     {
//         id:2,
//         title:"Siperman Homecoming"
//     },
//     {
//         id:3,
//         title:"Avengers Endgame",
//         year:2009
//     }
    
// ];


// const getDatos= ()=>{
//     return datos
// }

// console.log(getDatos())

//callback

// const getDatos= ()=>{
//         setTimeout(()=>{
//             return datos
//         },1500)
// }
// console.log(getDatos())


//promise

const datos = [];

const getDatos = ()=>{
    return new Promise((resolve,reject)=>{
        if(datos.length===0){
            reject(new Error("Error,no existen datos"))
        }
        setTimeout(()=>{
            resolve(datos)
        },1500)
    }
)}


getDatos()
    .then((datos)=>{
        console.table(datos)
    })
    .catch((error)=>{
        console.error(error.message)
    })

