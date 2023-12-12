function operar(arr,operacion,validar=0){
    let resultado = validar
    for(let num of arr){
        resultado = operacion(resultado,num)
    }

    return resultado
}

function suma(a,b){
    return a+b
}

function producto(a,b){
    return a*b
}

const numeros = [1,2,3,4,5];
const sumaTotal = operar(numeros,suma);
const productoTotal = operar(numeros,producto,1)


console.log(sumaTotal)

console.log(productoTotal)


//una funcion que devuelve otra funcion


function multiplicador(factor){
    return function(numero){
        return numero*factor
    }
}

const duplicar = multiplicador(2)
const triplicar = multiplicador(3)

console.log(duplicar(5))
console.log(triplicar(5))

const doTask = (iterations,callback)=>{
    const numbers = []

    for(let i=0;i< iterations;i++){
        const number = 1 + Math.floor(Math.random()*6)
        numbers.push(number)
        if(number===6){
            callback({
                error:true,
                iter:i,
                message: "se ha sacado un 6"
            });
            return;
        }
    }

    return callback(null,{
        error:false,
        value:numbers
    })
}

doTask(10,function(err,result){
    if(err){
        console.log(">>Error: ", err.message);
        console.log(err)
        return
    }
    console.log("Tiradas correctas: ", result.value)
})



function ruidosa(funcion){
    return (...argumentos)=>{
        console.log("llamando con ", argumentos)
        let resultado = funcion(...argumentos)
        console.log("llamada con", argumentos,", retorno",resultado)
        return resultado
    }
}

ruidosa(Math.min)(3,2,1);


a = Math.pow(2,8)
console.log(a)

console.log(2**8)