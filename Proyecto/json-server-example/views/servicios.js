import { controlador } from "../controllers/controlador.js";


if(localStorage.getItem("estado")){
  const formu = document.querySelector(".formserv");
  formu.addEventListener("click", (e) => {
    controlador(formu, e, "carrito");
    e.stopPropagation();
  });


let infocarrito = document.getElementById("imcar")
infocarrito.addEventListener("click",(e)=>{
    let  infoca = document.querySelector(".infcar")
    infoca.classList.toggle("activ")
  })



}






export function idProducto(e){
  if(e.target.id=="btn1"){
    return "1"
  }
  else if(e.target.id=="btn2"){
      return "2"
  }
}


export function ActualizarNumeroCarrito(dt){
  let num = 0
  console.log(dt.length)
    if(dt.length!=0){
      for(let i=0;i<dt.length;i++){
        num += dt[i].CantidadProducto 
      }
      return num
    }
    return 0
   
  }
   


  // dt.array.forEach(element => {
  //     num += console.log(element.CantidadProducto)
  // });
  // console.log(num)
  // return num

