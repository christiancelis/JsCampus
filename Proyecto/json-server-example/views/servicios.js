import { controlador } from "../controllers/controlador.js";


if(localStorage.getItem("estado")){
  const formu = document.querySelector(".formserv");
  formu.addEventListener("click", (e) => {
  controlador(formu, e, "carrito");
  e.stopPropagation();
});
}


export function idProducto(e){
  if(e.target.id=="btn1"){
    return "1"
  }
  else if(e.target.id=="btn2"){
      return "2"
  }
}
