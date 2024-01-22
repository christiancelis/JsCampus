
        const persona ={
            nombre:"dani",
            edad: "30",
            esTrabajador: true,
            familia:["Miguel","Maria"],
            direccion:{
                calle:"Calle de los estudiantes",
                ciudad:"Bucaramanga",
                numero: 13
            },
            caminar:function(){
                console.log(this.nombre + " "+ "está caminando--")
            }

        }

    

        let list = persona["familia"]
      
        list.push("pancracia")

        persona["familia"] = list

        console.log(persona)

        // persona.caminar()
        

        
        

        // persona.nombre = "Daniela"
        // console.log(persona.nombre)
        // persona.caminar()

        //convertir un objeto a json
        // JSON.stringify

        // const cadenaPersona = JSON.stringify(persona)
        // console.log(cadenaPersona)

        // //cadena json a objeto
        // //JSON.parse()

        // const objetopers = JSON.parse(cadenaPersona)
        // console.log(objetopers)

