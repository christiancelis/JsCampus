
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
fn = function (n) {
return String(n > 5);
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








