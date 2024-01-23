export async function get(url, datos) {
  try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        }
      });
      let  dt = await response.json()
      console.log(dt)
      returndt


    }catch(error) {
      console.error("Error:", error);
      return null
    }
  }
