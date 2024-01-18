import { controlador } from "../controllers/controlador.js";

const formu = document.querySelector(".formserv");
formu.addEventListener("click", (e) => {
  e.preventDefault();
  controlador(formu, e, "carrito");
  e.stopPropagation();
});

 export function idProducto(e){
    if(e.target.id=="btn1"){
      return "1"
    }
    else if(e.target.id=="btn2"){
        return "2"
    }
}
