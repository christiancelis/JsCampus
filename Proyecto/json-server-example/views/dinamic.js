
if(localStorage.getItem("estado")){
        let opinicio = document.getElementById("opInicio")
        opinicio.textContent = "Cerrar Sesión"
        opinicio.style.color = "yellow"
        opinicio.addEventListener("click",(e)=>{
            e.preventDefault()
            localStorage.clear()
            alert("Sesion Terminada")
            window.location.reload()
            e.stopPropagation()
        })  

        // let numcarito = document.querySelector(".numeroCarrito")
        // numcarito.textContent = localStorage.getItem("contadorCarrito")

        let us = document.getElementById("NomUser")
        let dat = JSON.parse(localStorage.getItem("user"))
        us.textContent = dat.NombreUser + " "+ dat.ApellidoUser   
}


let ButtonNav = document.querySelector(".menu-hamburguesa")
ButtonNav.addEventListener("click",(e)=>{
    e.stopPropagation()
    let index = document.querySelector(".index")
    let ImgHamburguesa = document.querySelector("#menu-img")
    let NavElements = document.querySelector(".listaNav")
   
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


