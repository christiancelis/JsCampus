import { controlador } from "../Controller/controlador.js";

const formw = document.querySelector("form");
formw.addEventListener("click", (e) => {
    e.preventDefault()
    controlador(formw, e, "usuarios");
    e.stopPropagation();
});

const Regcompra = document.querySelector(".Regcompra")
Regcompra.addEventListener("click",(e)=>{
    e.preventDefault()
    controlador(Regcompra, e, "usuarios");
    e.stopPropagation();
})

let prods = document.getElementById("Productos")
prods.addEventListener("click",(e)=>{
    const btnGuardarCompra = document.getElementById("GuardarCompra")
    if(prods.value != ""){
        btnGuardarCompra.removeAttribute("disabled")
    }else{
        btnGuardarCompra.setAttribute("disabled", "true")
    }
})


export function CambiarVista(TipoUsuario){
    const credencials = document.querySelector(".credencials");
    credencials.style.display = "none";
    console.log(TipoUsuario)
    if(TipoUsuario==="2"){
        Usuario2()
    }
}

export function ObtenerCliente(infousuario){
    let NombreUsuario = document.getElementById("nombre")
    NombreUsuario.value = infousuario.nombre
    NombreUsuario.removeAttribute("disabled")

}

function Usuario2(){
    let RegistroCompra = document.getElementById("RegistrarCompra")
    RegistroCompra.style.display = "flex"
}










