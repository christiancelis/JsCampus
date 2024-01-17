
ButtonNav = document.querySelector(".menu-hamburguesa")

ButtonNav.addEventListener("click",(e)=>{
    e.stopPropagation()
    ImgHamburguesa = document.querySelector("#menu-img")
    NavElements = document.querySelector(".listaNav")
   
    if(NavElements.classList.toggle("visible")==true){
        ImgHamburguesa.setAttribute("src","../assets/PaginaPrincipal/x-menu-hamburguesa.png")
    }else{
        ImgHamburguesa.setAttribute("src","../assets/PaginaPrincipal/menu-hamburguesa.png")
    }
})



// window.addEventListener("scroll",()=>{
//     let reveals = document.querySelectorAll(".reveal")
//     for(let i=0;i<=reveals.length;i++){
//         let windowheigth = window.innerHeight
//         let revealtop = reveals[i].getBoundingClientRect().top 
//         let revealpoint = 150

//         if(revealtop<windowheigth-revealpoint){
//             reveals[i].classList.add("active")

//         }else{
//             reveals[i].classList.remove("active")
//         }
//     }
// })