import { post } from "../models/post.js"; //AGREGAR
import { Verificar, get } from "../models/get.js"; //OBTENER
import { put } from "../models/put.js"  //ACTUALIZAR
import { delet } from "../models/delete.js"; //BORRAR

export async function controlador(formu, event, entidad, elemformu) {
  const URL = "http://localhost:4000/";
  let url = "";
  
  const datos = formu !== null ? Object.fromEntries(new FormData(formu)) : null;
  const value = event.target.value;

  switch (value) {
    case "Registrarse":
      url = URL + entidad;
      console.log(datos)
      Verificar(url,datos).then(dt => {
          console.log(dt)
          if(dt!= true){
          post(url, datos);
          formu.reset();
          }
          window.location.href = "http://127.0.0.1:5504/Proyecto/json-server-example/html/iniciosesion.html"
      })
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
    case "Iniciar Sesión":
      if(localStorage)
      url = URL + entidad + `/?Correo=${datos.Correo}`;
      get(url,datos).then(dt => {
        formu.reset
        localStorage.setItem("user",JSON.stringify(dt[0]))
        localStorage.setItem("estado","activo")
        window.location.href = `  http://127.0.0.1:5504/Proyecto/json-server-example/html/servicios.html?user=${dt[0].NombreUser} + " " + ${dt[0].ApellidoUser}`;      
      });
      break;
  }
  
}


