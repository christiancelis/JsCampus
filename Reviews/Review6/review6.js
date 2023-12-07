   
    function leerPalabra(msg){
        let op=false
        let valor = toString(prompt(msg))
        while(true){
            if(isNaN(valor) || valor=="null" || valor==="" || valor.length<=0 ||valor.length>100){
            valor=toString(prompt("Error- valor no puede ser vacio o ser un numero"))
            }
            else{
                op=true
            }

            if(op===true){
                return valor
            }
        }
    }



    function leerOpcion(msg){
        let op=false
        let numero = Number(prompt(msg))
        while(true){
            if(isNaN(numero) || numero=="null" || numero==="" || numero!=1 || numero!=0){
                numero=Number(prompt("Error-digite numero valido"))
            }else{ 
                op=true
            }
         
            if(op===true){
                return numero
            }
        }
    }


function AgregarPalabras(words){
    for(let i=0;i<=999;i++){
        let word = leerPalabra("Digite una palabra")

        if(i>1){
            op=leerOpcion("Desea salir? si:1 no:0")
            if(op===1){
                return words
            }
            else{
                words.push(word)
            }
        }
    }
    return words
}



function main(){
    const words = new Array()
    AgregarPalabras(words)
    prefi = leerPalabra("Digite un prefijo")
    
    
}

main()