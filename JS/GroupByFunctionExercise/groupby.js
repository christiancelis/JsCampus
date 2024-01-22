
array = [
    {"id":"1"},{"id":"1"},{"id":"2"},{"id":"3"},{"id":"2"},{"id":"1"}
]
fn = function (item) {
return String(item.id);
}

function agrupar(fn,array){ 
    let a = new Map()
    array.forEach((element)=>{
            if(a.get(fn(element))===undefined){
                lista = []
            }
            lista.push(element)
            a.set(fn(element),lista)
      })
    return a
}

console.log(agrupar(fn,array))

// function groupBy(fn) {
//     const output = new Map;
//     array.forEach(element => {
//         let dato ;
//         if(output.has(fn(element))){
//             dato = output.get(fn(element));
//             dato.push(element)
//         } else{
//             dato = [element]
//             output.set(fn(element),dato)
//         }
//         dato = [];
//     });
//     return output;
// }

// array.nuevoMetodo = groupBy;
// console.log(array.nuevoMetodo(fn))








