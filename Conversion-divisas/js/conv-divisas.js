async function getDivisa(){

    url = "https://cdn.dinero.today/api/ecb.json"

    const respuesta = await fetch(url);

    if(!respuesta.ok){
   throw new Error("Error, obtener divisa");
    }
    const json = await respuesta.json()

    return(json.rates)
}


async function AgregarInfoSelect(){
    infoDivisa = await getDivisa()
    let sl = document.querySelectorAll("select")
        sl.forEach((element)=>{
            RellenarSelect(element,infoDivisa)
        })
}

function RellenarSelect(element,infoDivisa){
    for (e in infoDivisa){
        opt = document.createElement("option")
        opt.setAttribute("value",e)
        opt.textContent = e
        element.appendChild(opt)
    }
}


inps = document.querySelectorAll("input")

    inps.forEach((e)=>{
        e.addEventListener("click",(e)=>{
            inporigin = document.getElementById("cant-orig")
            inpdesc = document.getElementById("cant-dest")

            if(e.target.id=="cant-orig"){
                inp2 = document.getElementById("cant-dest")
                inp2.style.backgroundColor = "red"
                e.target.style.backgroundColor = "Green"
            }else{
                inp2 = document.getElementById("cant-orig")
                inp2.style.backgroundColor = "red"
                e.target.style.backgroundColor = "Green"
            }
        })
       
    })

function PintarColores(ori,desc){
    ori.style.backgroundColor = "Green"
    desc.style.backgroundColor = "Red"
}


btnGuardar = document.getElementById("guardar")
btnGuardar.addEventListener("click",(e)=>{
    inporigin = document.getElementById("cant-orig")
    inpdesc = document.getElementById("cant-dest")
    selectorigin = document.getElementById("div-orig")
    selectdest = document.getElementById("div-dest")
    
    console.log(selectorigin.value)
    console.log(selectdest.value)
    if(inporigin.value=="" && inpdesc.value==""){
        alert("Las dos Casillas no pueden estar Vacias- Digite un valor")
    }else if(inporigin.value!="" && inpdesc.value!=""){
        alert("Las dos Casillas no pueden estar llenas")
    }
    else if(selectorigin.value==="none"  || selectdest.value==="none"){
        alert("seleccione las divisas")
    }else{
        CalcularDivisa(inporigin,inpdesc,selectorigin,selectdest)
    }
})


async function CalcularDivisa(inporigin,inpdesc,selectorigin,selectdest){
    bandera = true;
       if(inporigin.value===""){
            bandera= false;
            valorBase = Number(inpdesc.value)
            DivisaOrigen = selectdest.value
            DivisaDesc = selectorigin.value
            ValorDest = Number(inporigin.value)
            PintarColores(inpdes,inporigin)
       }else{
            valorBase = Number(inporigin.value)
            DivisaOrigen = selectorigin.value
            DivisaDesc = selectdest.value
            ValorDest = Number(inpdesc.value)
            PintarColores(inporigin,inpdesc)
       }
       infoDivisa = await getDivisa()
       ValorDivisaDest = Number(infoDivisa[DivisaDesc])
       console.log(ValorDivisaDest)
       ValorDivisaOrigen = Number(infoDivisa[DivisaOrigen])
       console.log(ValorDivisaOrigen)
       Resultado = ((valorBase*ValorDivisaDest)/ValorDivisaOrigen).toFixed(2)

       console.log(Resultado)

       if(bandera===false){
        inporigin.value = Resultado
       }else{
        inpdesc.value = Resultado
       }
          
}




AgregarInfoSelect()

