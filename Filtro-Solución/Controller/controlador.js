import { devolverinfo, get } from "../Model/get.js";
import {CambiarVista, ObtenerCliente} from "../View/iniciosesion.js"

export async function controlador(formu, event, entidad) {
    const URL = "http://localhost:4001/";
    
    const datos = formu !== null ? Object.fromEntries(new FormData(formu)) : null;
    const value = event.target.value;
    console.log(value)
    let url=""
    switch (value) {
      case "Ingresar":
        url=""
        url = URL + entidad + `/?id=${datos.id}`;
        console.log(entidad)
        get(url,datos).then((dt)=>{
            localStorage.setItem("TipoUsuario",dt[0].tipoId)
            localStorage.setItem("Usuario",JSON.stringify(dt[0]))
            CambiarVista(dt[0].tipoId)
        })
        break;
        case "consultar":
            url=""
            url = URL + entidad + `/?id=${datos.id}`;
            console.log(entidad)
            devolverinfo(url).then((dt)=>{
                localStorage.setItem("Cliente",JSON.stringify(dt[0]))
                ObtenerCliente(dt[0])
            })
        break;
        case "Guardar":
            url=""
            console.log(datos)
            url = URL + "perfumes" + `/?name=${datos.Productos}`;
            devolverinfo(url).then((product)=>{
                console.log("idproducto", product[0].id)
            })
            url = URL + "registros";
            devolverinfo(url).then((registros)=>{
                console.log("numeroregistros", registros.length)
            })
            console.log(datos.id)
            url = URL + "registros" + `/?usuarioId=${datos.id}`;
            devolverinfo(url).then((registrosusuario)=>{
                if(registrosusuario===""){
                    console.log("No hay compras asociadas a este cliente")
                }else{
                    console.log("usuario tiene registro")
                    let dia = Obtenerdia()
                }
            })


        break;
           
    }
   
}


function Obtenerdia(){
    let fecha = new Date
    let dia = fecha.getDay()
   let  mes = fecha.getMonth()
   let  año = fecha.getFullYear()
    let formatodia = `${año}-${mes}-${dia}`
    return formatodia
}
