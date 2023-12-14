
function dt(iterations){
    const numbers = [];
    for (let i = 0; i < iterations; i++) {
    const number = 1 + Math.floor(Math.random() * 6);
    numbers.push(number);
    if (number === 6) {
    return {
    error: true,
    iter: i+1,
    message: "Se ha sacado un 6"
    
    };
    }
    }
    return {
    error: false,
    value: numbers
    };
}


async function doTask(){
    let r = await dt(10)
    if(r.error===false){
        throw new Error(r.numbers)
    }
    return r
}

doTask()
    .then((res)=>{
        console.log(res.message)
    })
    .catch((error)=>{
        console.error(error)
    })