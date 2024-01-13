fetch("http://localhost:3000/trainers/3",{
    method:"PUT",
    body:JSON.stringify({        
        "id": "3",
        "nombres": "yulieth",
        "apellidos": "rueda",
        "especialidad": "Fullstack phyton",
        "sexo":"no especificado",
        "edad":"20"
    }),
    headers:{
        "Content-Type":"application/json; charset=UTF-8"
    }
})
.then((response)=>response.json())
.then((json)=> console.log(json))
.catch((error)=>console.error("error"+ error))
