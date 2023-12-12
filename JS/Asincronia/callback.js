///callback -> argumento de una funcion es otra funcion

const myNumbers = [4,1,-20,-7,5,9,-6];

const posNumbers = removeneg(myNumbers, (x)=> x>=0);
console.log(posNumbers)


function removeneg(numbers,callback){
    const myArray = []
    for(const x of numbers){
        if(callback(x)){
            myArray.push(x)
        }
    }

    return myArray
}


function realizarTareaAsincronica(callback){
    setTimeout(function(){
        console.log("Tarea asincronica completada")
        callback()
    },200)
}

function micallback(){
    console.log("el callback se ha ejecutado")
}

realizarTareaAsincronica(micallback);
console.log("Tarea principal continua")

//solo usar cuando sea necesario
//claridad y concisa
//nombres de variables descriptivas
//documentacion adecuada

