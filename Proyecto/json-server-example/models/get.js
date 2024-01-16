// export function get(url, datos) {
//     fetch(url, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       }
//     }.then((response) => response.json())
//     .then((dt) => {
    
      
//     })
//     .catch((error) => {
//       console.error(error);
//     }))
//   }


 export async function get(url, datos) {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        }
      });
      let  dt= await response.json();
        if(datos.Correo==dt[0].Correo && datos.Contraseña ==dt[0].Contraseña){
            console.log("e iniciado sesion")
            return dt
          }
        return console.log("Valores incorrectos")
    } catch (error) {
      console.error("Error:", error);
      return null
    }
  }