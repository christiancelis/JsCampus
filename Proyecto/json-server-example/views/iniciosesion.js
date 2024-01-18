import { controlador } from "../controllers/controlador.js";

const formw = document.querySelector(".forminicio");
formw.addEventListener("click", (e) => {
  controlador(formw, e, "user");
  e.stopPropagation();
});


