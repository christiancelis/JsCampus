export function patch(url, objeto) {
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json ;charset=UTF-8",
      },
      body: JSON.stringify(objeto),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log("Actualizacion satisfactoria")
        return
      })
      .catch((error) => {
        console.error(error);
      });
      return 
  }

