// const datos =[
//     {
//         id:1,
//         title:"Iron Man",
//         year: 2008
//     },
//     {
//         id:2,
//         title:"Siperman Homecoming",
//         year: 2012,
//     },
//     {
//         id:3,
//         title:"Avengers Endgame",
//         year:2009
//     }
    
// ];

const datos = []


async function obtenerDatos(){
    try {
        const datosObtenidos = await getDatos()
        console.table(datosObtenidos)
    } catch (error) {
        console.log(error.message);
    }
}

obtenerDatos()



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






const fs = require("fs").promises;

async function fecthData(){
    try {
        const data = await fs.readFile("robots.txt","utf-8")
        console.log(data)
    } catch (error) {
        console.error("error al leer el archivo: "+ error.message)
    }
}


console.log("codigo sincrono")
fecthData()






