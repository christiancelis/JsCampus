
let Texto = "Este este ESTE es un ejemplo de un texto que es ideal para procesar"
Textolow  = Texto.toLowerCase()

let textoseparado =  Textolow.split(" ")
const mapa = new Map()

function buscarv(v,mp,txs){
    let count = 0
    for(let i=0;i<textoseparado.length;i++){
        if(v===textoseparado[i]){
            count++
        }
    }
    mp.set(v,count)
}


for(text of textoseparado){
    buscarv(text.toLowerCase(),mapa,textoseparado)
}


console.log(`Palabra        Veces`)
console.log(`----------------------`)

mapa.forEach(function(v,k){
    console.log(`${k}          ${v}`)
})

