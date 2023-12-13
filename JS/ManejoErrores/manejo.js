//throw "mensaje de error"

//atrapar errores

//try lanza excepcion

//catch si ocurre excepcion se ejecuta

//finally

// logError archivo de errores

try{
    throw "Ninguno paso el quiz"
}catch(e){
    console.log(e)
}


function calcularCUadradonUmero(numero){
    if(isNaN(numero)){
        throw new Error("la entrada debe ser un numero")
    
    }
    return numero * numero
}


try{
    const input = prompt("INgrese un numero")
    const numero = parseFloat(input)
    const resultado = calcularCUadradonUmero(numero)
    console.log(`El cuadrado de ${numero} es ${resultado}`)

}catch(error){
    console.log(`Se produjo un error: ${error.message}`)
}

