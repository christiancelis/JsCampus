import { post } from "../models/post.js"; //AGREGAR
import { get } from "../models/get.js"; //OBTENER
import { put } from "../models/put.js"  //ACTUALIZAR
import { delet } from "../models/delete.js"; //BORRAR

export async function controlador(formu, event, entidad, elemformu) {
  const URL = "http://localhost:4000/";
  let url = "";
  
  const datos = formu !== null ? Object.fromEntries(new FormData(formu)) : null;
  const value = event.target.value;

  switch (value) {
    case "Agregar":
      url = URL + entidad;
      console.log(datos)
      post(url, datos);
      formu.reset();
      break;
    case "CARGARSELECT":
    case "Buscar":
      url = `${URL}${entidad}/${datos !== null ? datos.id : ""}`;
      let data = get(url, formu)        // Utilizar los datos obtenidos
      console.log(data)
      ;
      break;
    case "Modificar":
      url = URL + entidad + `/${datos.id}`;
      put(url, datos);
      //formu.reset
      break;
    case "Borrar":
      url = URL + entidad + `/${datos.id}`;
      delet(url);
      formu.reset;
      break;
    case "iniciarSesion":
      if(localStorage)
      url = URL + entidad + `/?Correo=${datos.Correo}`;
      // let dt =  await get(url,datos)
      // nb(dt);
  
      get(url,datos).then(dt => {
      let lista =  dt[0].NombreUser + " " + dt[0].ApellidoUser
      localStorage.setItem("user",JSON.stringify(lista))
      localStorage.setItem("estado","activo")
        // let us = document.getElementById("NomUser");
        // nb(dt, us);
        // window.location.href = `http://127.0.0.1:5504/Proyecto/Servicios/servicios.html?user=${dt[0].NombreUser} + " " + ${dt[0].ApellidoUser}`;
        
      });

 
      break;
  }
  
}


