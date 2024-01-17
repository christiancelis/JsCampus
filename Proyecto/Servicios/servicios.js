let btn1 = 1
let btn2 = 1

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

function AumentarNumCarrito(){
  let numeroCarrito = document.querySelector(".numeroCarrito")
  console.log("oprimi un boton")
  ncarrito = Number(numeroCarrito.textContent)
  numeroCarrito.textContent = ncarrito+1
}
    // }else{
    //     
    //     window.location.href= "../json-server-example/html/InicioSesion/iniciosesion.html"
    // }
   
    
let us = document.getElementById("NomUser")
us.textContent = JSON.parse(localStorage.getItem("user"))

// export function nb(a, us){
//   let lista =  a[0].NombreUser + " " + a[0].ApellidoUser
//    console.log(lista)

//   //  let us = document.getElementById("NomUser")
// console.log(us);
// us.textContent = "lista";  
// }
  
