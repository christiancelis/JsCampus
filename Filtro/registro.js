import { get } from "./get.js";

export async function ValidacionCredenciales(formu,e){
    const datos = formu !== null ? Object.fromEntries(new FormData(formu)) : null;
    URL = `http://localhost:4001/usuarios/?id=${datos.id}`
    get(URL,datos).then(dt=>{
        if(dt==false || dt==null){
            return
        }else{
            localStorage.setItem("estado","activo")
            localStorage.setItem("user",JSON.stringify(dt[0]))
            console.log(dt)
            return dt  
        }
    })
}




