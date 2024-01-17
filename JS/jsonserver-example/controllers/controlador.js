import { post } from "../models/post.js"; //AGREGAR
import { get } from "./../models/get.js"; //OBTENER
import { put } from "../models/put.js"  //ACTUALIZAR
import { delet } from "./../models/delete.js"; //BORRAR

import { llenarFormulario, llenarSelect } from "./../views/utils.js";

export function controlador(formu, event, entidad, elemformu) {
  const URL = "http://localhost:4000/"; 
  let url = "";
  
  const datos = formu !== null ? Object.fromEntries(new FormData(formu)) : null;
  const value = event.target.value;

  switch (value) {
    case "Agregar":
      url = URL + entidad;
      post(url, datos);
      formu.reset();
      break;
    case "CARGARSELECT":
    case "Buscar":
      url = `${URL}${entidad}/${datos !== null ? datos.id : ""}`;
      let data = get(url, formu)        // Utilizar los datos obtenidos
      if (formu !== null) llenarFormulario(formu, data);
      llenarSelect(data, elemformu);
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
  }
}