export async function get(url, datos) {
    try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
          "Content-Type": "application/json",
          }
        });
        let  dt = await response.json()
        
        if(dt[0].id=="" || dt[0].id==""){
          alert("Rellene Campos Vacios")
          return false  
        }
        if(datos.id==dt[0].id && datos.pass==dt[0].pass){
            alert("inicio sesion Satisfactorio")
            return dt
        }else{
            alert("Valores Incorrectos")
            return false
        }
      }catch(error) {
        console.error("Error:", error);
        return null
      }
    }



    export async function devolverinfo(url) {
        try {
          const response = await fetch(url, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            }
          });
          let  dt = await response.json();

          if(dt===""){
            return []
          }else{
            return dt
          }
        } catch (error) {
          console.error("Error:", error);
          return []
        }
      }
      