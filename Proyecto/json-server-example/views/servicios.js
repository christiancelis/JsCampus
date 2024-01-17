import { controlador } from "../controllers/controlador";

const formu = document.querySelector("form");
formu.addEventListener("click", (e) => {
  e.preventDefault();
  controlador(formu, e, "Servicio");
  e.stopPropagation();
});


let btn1 = 1  ,  btn2 = 1

let btncards = document.querySelector(".flex-cards")

btncards.addEventListener("click",(e)=>{
    if(localStorage.getItem("estado")){
        if( e.target.id=="btn1" || e.target.id=="btn2" ){
          let opcion = e.target.id
          switch(opcion){
            case "btn1": 
              if(btn1>1){
              alert("no puede agregar mas de 1 vez un producto")
                return
               }
                btn1++
                AumentarNumCarrito() 
            break;
            case "btn2": 
              if(btn2>1){
                alert("no puede agregar mas de 1 vez un producto")
                return
              }
              btn2++
              AumentarNumCarrito()
            break
          }
        }
      }else{
          alert("inicia sesion")
      }

  e.stopPropagation()
})



cotizarPlan = document.getElementById("cotizarPlan")
cotizarPlan.addEventListener("click",(e)=>{
    e.preventDefault()
    window.location.href = "http://127.0.0.1:5504/Proyecto/json-server-example/html/Contacto.html"
    e.stopPropagation()
})
