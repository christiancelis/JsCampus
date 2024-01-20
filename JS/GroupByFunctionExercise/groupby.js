array = [{"id":"1"},
        {"id":"1"},
        {"id":"2"}]

fn = function (item) {
    return item.id;
}

function filtro(fn,array){
    llaves = []
    obj = new Object()
    array.forEach(element => {
        if(!llaves.(fn(element))){
            llaves.push(fn(element))
        }
        
    });

    return llaves
}

console.log(filtro(fn,array))



