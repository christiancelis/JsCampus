const miPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const exito = false;
        if(exito){
            resolve("Operacion exitosa")
        }
        else{
            reject("Hubo un error al cumplir la promesa")
        }
        
    },2000)
});


    miPromesa
    .then(resultado=>{
        console.log(resultado)
    })
    .catch(error=>{
        console.error("Error:" ,error)
    });
