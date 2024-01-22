
        // let empleados = new Object("juan); // sintaxis de "constructor de objetos"
        // let user = {};  // sintaxis de "objeto literal"
        // Obteniendo los valores de las propiedades del objeto:
        // alert( user.name ); // John
        // alert( user.age ); // 30
        // Para eliminar una propiedad podemos usar el operador delete:
        // delete user.age;
        // let user = {};
        // // asignando
        // user["likes birds"] = true;
        // // obteniendo
        // alert(user["likes birds"]); // true
        // // eliminando
        // delete user["likes birds"];

        const obj = {
            "empleados":[
                {   "nombre":"juan perez",
                    "apellido":"lopez",
                    nombreCompleto: function(){
                return this.nombre +" "+  this.apellido}
                },
                {
                    "nombre": "ana","apellido":"gonzales",nombreCompleto: function(){
                    return this.nombre + " " + this.apellido}
                }
            ]
        }

        console.log(obj.empleados[0].nombre,obj.empleados[0].apellido)
        console.log(obj.empleados[0].nombreCompleto())
