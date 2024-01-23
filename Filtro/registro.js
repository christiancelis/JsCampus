import { get } from "./get.js";

export async function ValidacionCredenciales(formu,e){
    URL = "http://localhost:4001/usuarios"
    const datos = formu !== null ? Object.fromEntries(new FormData(formu)) : null;
    get(URL,datos).then(dt=>{
        console.log(dt)
    })
}




