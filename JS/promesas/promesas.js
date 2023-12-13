const miPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Operacion exitosa")
    },2000)
});


console.log("Inicio de la operacion")

miPromesa
    .then(resultado=>{
        console.log(resultado)
    })
    .catch(error=>{
        console.log(error("Error:" ,error))
    });


console.log("Tareas Adicionales")
