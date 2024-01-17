fetch("http://localhost:3000/trainers",{
    method:"POST",
    body:JSON.stringify({        
        "id": "3",
        "nombres": "yulieth",
        "apellidos": "rueda",
        "especialidad": "Fullstack phyton"
    }),
    headers:{
        "Content-Type":"application/json; charset=UTF-8"

    }
})
.then((response)=>response.json())
.then((json)=> console.log(json))
.catch((error)=>console.error("error"+ error))
