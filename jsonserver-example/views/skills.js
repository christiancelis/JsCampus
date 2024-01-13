import { controlador } from "/jsonserver-example/controllers/controlador.js";

const formu = document.querySelector("form");

formu.addEventListener("click", (e) => {
  e.preventDefault();
  controlador(formu, e, "skills");
  e.stopPropagation();
});