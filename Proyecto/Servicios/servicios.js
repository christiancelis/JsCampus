
// let btncards = document.querySelector(".flex-cards")
// let numeroCarrito = document.querySelector(".numeroCarrito")

// btncards.addEventListener("click",(e)=>{

//     if(localStorage.getItem("estado")==true){
//         if( e.target.id=="btn1" ||e.target.id=="btn2" ){
//             console.log("oprimi un boton")
//             ncarrito = Number(numeroCarrito.textContent)
//             numeroCarrito.textContent = ncarrito+1
//         }
//     }else{
//         alert("inicia sesion")
//         window.location.href= "../json-server-example/html/InicioSesion/iniciosesion.html"
//     }
   
// })

export async function nb(a){
    let lista = await a
    await asignar(lista)
  }
  
  function asignar(a){
    let us = document.querySelector(".NomUser")
    us.textContent = a.NombreUser
  }
  
