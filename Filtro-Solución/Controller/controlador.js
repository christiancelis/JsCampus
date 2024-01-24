import { devolverinfo, get } from "../Model/get.js";
import {post} from "../Model/post.js"
import {CambiarVista, ObtenerCliente} from "../View/iniciosesion.js"
import {put} from "../Model/put.js"

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
            let  idproducto = await devolverinfo(url).then((product)=>{
               let  idproducto = product[0].id
                return idproducto
            })
            url = URL + "registros";
            let  idRegistros = await devolverinfo(url).then((registros)=>{
                let idRegistros = registros.length + 1
                return idRegistros
            })
            console.log(datos.id)
            url = URL + "registros" + `/?usuarioId=${datos.id}`;
            devolverinfo(url).then((registrosusuario)=>{
                let fecha = Obtenerdia()
                if(registrosusuario.length===0){
                   
                    let obj = {
                        "id": `${idRegistros}`,
                        "usuarioId": `${datos.id}`,
                        "compras": 
                        [
                        {
                        "fecha": `${fecha}`,
                        "perfumeId": `${idproducto}`
                        }
                        ]
                    }
                    url = URL + "registros"
                    post(url,obj)
                    console.log("Compra exitosa")
                }else{
                    let obj ={
                            "fecha": `${fecha}`,
                            "perfumeId": `${idproducto}`
                    }
                    console.log(registrosusuario[0].compras.push(obj))
                    url = URL + "registros" + `/${registrosusuario[0].id}`
                    let ob = (registrosusuario[0])
                    put(url,ob)
                }
            })


        break;
           
    }
   
}


function Obtenerdia(){
    let fecha = new Date
    let formatodia = `${fecha.getFullYear} - ${fecha.getMonth} - ${fecha.getDay}`
    return formatodia
}
