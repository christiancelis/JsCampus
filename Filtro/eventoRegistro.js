import {ValidacionCredenciales} from "./registro.js";

let btnenviar = document.getElementById("enviar")
let sesion = document.getElementById("sesion")
let user = 0

btnenviar.addEventListener("click",(e)=>{
    e.preventDefault()
    user = iniciarsesion(e)
    if(localStorage.getItem("estado")){
        let usuario= JSON.parse(localStorage.getItem("user"))
        iniciar()
        console.log(usuario.tipoId)
        if(usuario.tipoId==="1"){
            mostrarinfo1()
        }
    }
    e.stopPropagation()
})


async function iniciarsesion(e){
    let formu = document.querySelector("form")
    let a = await ValidacionCredenciales(formu,e)
    console.log(a)
    return 
}

function iniciar(){
    let contform = document.getElementById("contenedor")
    let header = document.querySelector("header")
    console.log("aa")
    contform.classList.toggle("inactivo")
    header.classList.toggle("activo")
}

//mostrar informacion administrador
function mostrarinfo1(){
    let infoadmin = document.getElementById("infoadmin")
    infoadmin.classList.toggle("formComprar")
}

sesion.addEventListener("click",(e)=>{
    cerrarsesion()
    localStorage.clear()
    window.location.reload()
})

function cerrarsesion(){
    let contform = document.getElementById("contenedor")
    let header = document.querySelector("header")
    contform.removeAttribute("inactivo")
    header.removeAttribute("activo")
}






