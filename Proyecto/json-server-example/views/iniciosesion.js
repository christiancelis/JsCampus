import { controlador } from "../controllers/controlador.js";

const formu = document.querySelector(".forminicio");
formu.addEventListener("click", (e) => {
  e.preventDefault();
  controlador(formu, e, "user");
  e.stopPropagation();
});


