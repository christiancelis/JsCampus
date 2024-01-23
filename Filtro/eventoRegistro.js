import {ValidacionCredenciales} from "./registro.js";

let btnenviar = document.getElementById("enviar")

btnenviar.addEventListener("click",(e)=>{
    e.preventDefault()
    v(e)
    e.stopPropagation()
})


async function v(e){
    console.log("entre")
    let formu = document.querySelector("form")
    let a = await ValidacionCredenciales(formu,e)
    console.log(a)
    return 
}