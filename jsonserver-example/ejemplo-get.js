fetch("http://localhost:3000/trainers?nombres=carlos",{
    method:"GET",
    headers:{
        "Content-Type":"application/json; charset=UTF-8"
    }
})
.then((response)=>response.json())
.then((json)=> console.log(json))

