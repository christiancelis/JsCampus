import { controlador } from "../controllers/controlador.js";

const formu = document.querySelector("form");
formu.addEventListener("click", (e) => {
  e.preventDefault();
  controlador(formu, e, "user");
  e.stopPropagation();
});

let btn1= {
    id:1,
    Nombre:"Landing Page",
    Precio:2000000,
    Cantidad:1
} 

let btn2= {
  id:2,
  Nombre:"Pagina Media",
  Precio: 3500000,
  Cantidad:1
} 

 export function AgregarAlCarrito(e){
    if(e.target.id=="btn1"){
      return btn1 
    }
    else if(e.target.id=="btn1"){
        return btn2
    }
}

export function AumentarNumCarrito(){
  let numeroCarrito = document.querySelector(".numeroCarrito")
  console.log("oprimi un boton")
  ncarrito = Number(numeroCarrito.textContent)
  numeroCarrito.textContent = ncarrito+1
}

let cotizarPlan = document.getElementById("cotizarPlan")
cotizarPlan.addEventListener("click",(e)=>{
    e.preventDefault()
    window.location.href = "http://127.0.0.1:5504/Proyecto/json-server-example/html/Contacto.html"
    e.stopPropagation()
})
