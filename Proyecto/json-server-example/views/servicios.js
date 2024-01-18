import { controlador } from "../controllers/controlador.js";


let entidades = ["carrito","producto"]

const formu = document.querySelector("form");
formu.addEventListener("click", (e) => {
  e.preventDefault();
  controlador(formu, e, entidades);
  e.stopPropagation();
});


localStorage.setItem("contadorCarrito",0)

 export function idProducto(e){
    if(e.target.id=="btn1"){
      return "1"
    }
    else if(e.target.id=="btn2"){
        return "2"
    }
}

export function AumentarNumCarrito(){
  let numeroCarrito = document.querySelector(".numeroCarrito")
  console.log("oprimi un boton")
  ncarrito = Number(numeroCarrito.textContent)
  numeroCarrito.textContent = ncarrito+1
}

// let cotizarPlan = document.getElementById("cotizarPlan")
// cotizarPlan.addEventListener("click",(e)=>{
//     e.preventDefault()
//     window.location.href = "http://127.0.0.1:5504/Proyecto/json-server-example/html/Contacto.html"
//     e.stopPropagation()
// })
