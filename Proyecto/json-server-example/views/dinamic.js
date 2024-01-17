
function main(){
    if(localStorage.getItem("estado")){
        opinicio = document.getElementById("opInicio")
        opinicio.textContent = "Cerrar Sesión"
        opinicio.style.color = "yellow"
        opinicio.addEventListener("click",(e)=>{
            e.preventDefault()
            localStorage.clear()
            alert("Sesion Terminada")
            window.location.reload()
            e.stopPropagation()
        })        
    }

    let us = document.getElementById("NomUser")
    let dat = JSON.parse(localStorage.getItem("user"))
    us.textContent = dat.NombreUser + " "+ dat.ApellidoUser

    let numeroCarrito = document.querySelector(".numeroCarrito")
    numeroCarrito.textContent = localStorage.getItem("ElementosCarrito")
}


main()


function AumentarNumCarrito(){
    let numeroCarrito = document.querySelector(".numeroCarrito")
    console.log("oprimi un boton")
    ncarrito = Number(numeroCarrito.textContent)
    localStorage.setItem("ElementosCarrito",ncarrito+1)
    numeroCarrito.textContent = ncarrito+1
  }

ButtonNav = document.querySelector(".menu-hamburguesa")
ButtonNav.addEventListener("click",(e)=>{
    e.stopPropagation()
    index = document.querySelector(".index")
    ImgHamburguesa = document.querySelector("#menu-img")
    NavElements = document.querySelector(".listaNav")
   
    if(NavElements.classList.toggle("visible")==true){
        if(index){
            ImgHamburguesa.setAttribute("src","./assets/PaginaPrincipal/x-menu-hamburguesa.png")
        }else{
            ImgHamburguesa.setAttribute("src","../assets/PaginaPrincipal/x-menu-hamburguesa.png")
        }
    }else{
        if(index){
            ImgHamburguesa.setAttribute("src","./assets/PaginaPrincipal/menu-hamburguesa.png")
        }else{
            ImgHamburguesa.setAttribute("src","../assets/PaginaPrincipal/menu-hamburguesa.png")
        }
    }
})






//Scroll Animation

window.addEventListener("scroll",()=>{
    let reveals = document.querySelectorAll(".reveal")
    for(let i=0;i<=reveals.length;i++){
        let windowheigth = window.innerHeight
        let revealtop = reveals[i].getBoundingClientRect().top 
        let revealpoint = 150
        if(revealtop<windowheigth-revealpoint){
            reveals[i].classList.add("active")

        }else{
            reveals[i].classList.remove("active")
        }
    }
})