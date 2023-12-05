let matriz = [["salmon","carro"]["al","pap"]]


//conjuntos

//Set
//newset
//add()
//delete, has(), forEach(), values(), size.

const letras = new Set();

letras.add("a")
letras.add("b")
letras.add("c")
letras.add("d")

console.log(letras)
letras.delete("b")

console.log(letras)

//si existe dentro del diccionario

console.log(letras.has("y"))

letras.forEach(e=> console.log(e))

//recorrido con for of

for(const letra of letras.values()){
    console.log(letra)
}

console.log(letras.size)

//clear eliminar el conjunto
letras.clear()