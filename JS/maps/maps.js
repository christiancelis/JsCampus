//maps son diccionarios en phyton

//new map
//set key
//keys()
//values()
//entries() iterable con clave valor

//size cuantos elementos tienen un mpa

//creacion de un mapa


// new Map() – crea el mapa.
// map.set(clave, valor)) – almacena el valor asociado a la clave.
// map.get(clave) – devuelve el valor de la clave. Será undefined si la clave no existe en map.
// map.has(clave) – devuelve true si la clave existe en map, false si no existe.
// map.delete(clave) – elimina el elemento con esa clave.
// map.clear() – elimina todo de map.
// map.size – tamaño, devuelve la cantidad actual de elementos.

const frutas = new Map([["Manzanas",2500],["Peras",2000],["Banano",1500]])

console.log(frutas)
console.log("Cantidad de llaves:" + frutas.size)

//Agregar valores al diccionario //set

frutas.set("pitahaya",5000)
frutas.set("Mango",3000)

console.log(frutas)
console.log("Cantidad de llaves:" + frutas.size)

frutas.get("La fruta de camilo es"+ frutas.get("Mango"))

frutas.delete("pitahaya")

console.log("Cantidad de llaves:" + frutas.size)


//has cuando existe la llave


console.log("El mango existe en la canasta de frutas: "+frutas.has("Mango"))


//recorrer un map

frutas.forEach(function(v,k){
    console.log(`El precio de ${k} es:  ${v}`)
})


//entries toma llave valor

for(const fruta of frutas.entries()){
    console.log(fruta[0] +fruta[1])
}