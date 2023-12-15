async function getp(idpokemon){
    const url=  `https://pokeapi.co/api/v2/pokemon/${idpokemon}`;
    const respuesta = await fetch(url)
    if(!respuesta.ok){
        throw new Error("Error, pokemon no existe");
    }
    const json = await respuesta.json()
    return(json);
}


function GenerarNumeroAleatorio(min,max){
    return  Math.floor((Math.random() * (max - min + 1)) + min);
}

async function ObtenerInfo(id){
    if(id===1){
        Pokemon1 = []
        aleatorio = GenerarNumeroAleatorio(1,806)
        try {
            let infopokemon1 = await getp(aleatorio)
            Pokemon1 = [aleatorio,infopokemon1.name,infopokemon1.sprites.other["official-artwork"].front_default,Number(infopokemon1.stats[0].base_stat),Number(infopokemon1.stats[1].base_stat),Number(infopokemon1.stats[2].base_stat),Number(infopokemon1.stats[5].base_stat)]
        } catch (error) {
            console.log(error.message)
        }
        CrearElemento(Pokemon1,id)
    }else{
        if(Pokemon1.length===0){
            alert("Elija Pokemon Para Jugar")
            return
        }else{
            for(let i=0;i<7;i++){
                setTimeout(aleatorio = GenerarNumeroAleatorio(1,806),5000)
                try {
                    await delay(500)
                    let infopokemon2 = await getp(aleatorio)
                    Pokemon2 = [aleatorio,infopokemon2.name,infopokemon2.sprites.other["official-artwork"].front_default,Number(infopokemon2.stats[0].base_stat),Number(infopokemon2.stats[1].base_stat),Number(infopokemon2.stats[2].base_stat),Number(infopokemon2.stats[5].base_stat)]
                    
                } catch (error) {
                    console.log(error.message)
                }
                CrearElemento(Pokemon2,id)
            }
            Batalla()
           
        }
       
    }
}

function MostrarGanador(id){
    a = document.getElementById(`ganador${id}`)
    a.textContent = "Winner"
    a.style.display = "block"
}

function InfoAtaque(id){
    infobatalla = document.getElementById("infob${id")
    infobatalla.innerHTML = `Pokemon`
}


async function Batalla(){
    do {

    turno = Pokemon1[6]-Pokemon2[6]
    console.log(turno)
    if(turno<0){
        turno = turno * -1
        for(let i=0;i<turno;i++){
            Pokemon1[3] = Pokemon1[3]- (Pokemon1[5]*(1+(Pokemon1[6]/100)))-Pokemon2[4]
            await delay(5000)  
            CrearElemento(Pokemon1,1)
            if(Pokemon1[3]<=0){
                await delay(5000) 
                MostrarGanador(2)
                return
            }
        }

    }
    else{
        Pokemon2[3] = Pokemon2[3]- (Pokemon2[5]*(1+(Pokemon2[6]/100)))-Pokemon1[4]
        await delay(5000) 
        CrearElemento(Pokemon2,2)

        if(Pokemon2[3]<=0){
            await delay(5000) 
            MostrarGanador(1)
            return
        }
        
    }    
    } while (Pokemon1[3]<=0 ||Pokemon1[3]<=0);
    

}

function delay(time){
	return new Promise(resolve => setTimeout(resolve, time));
}


function CrearElemento(Pokemon, id){
        contenedor = document.getElementById(`cont${id}`)
        contenedor.innerHTML = `<img id="imagen${id}" src="${Pokemon[2]}" alt="">
        <div class=info${id}>
        Name: ${Pokemon[1]} <br>
        Hp: ${Pokemon[3]} <br>
        Attack: ${Pokemon[4]} <br>
        Defense: ${Pokemon[5]} <br>
        Speed: ${Pokemon[6]} <br>
        </div>
        <div id="ganador${id}"></div>`

        if(id===2){
            btn1 = document.getElementById("btn1")
            btn2 = document.getElementById("btn2")
            btn1.setAttribute("disabled","true")
            btn2.setAttribute("disabled","true")
        }
}

let Pokemon1 = []
let Pokemon2 = []

button1 = document.getElementById("btn1")
button2 = document.getElementById("btn2")

button1.addEventListener("click",()=>{
    ObtenerInfo(1)
})

button2.addEventListener("click",()=>{
    ObtenerInfo(2)
})

