function validarEntrada() {
  const texto = document.getElementById("inputTexto").value;
  const mensaje = document.getElementById("mensaje");

  if (texto) { // truthy
    mensaje.textContent = "Entrada válida: " + texto;
    mensaje.style.color = "green"
  } else { // falsy
    mensaje.textContent = "El campo está vacío. Por favor, escribe algo.";
    mensaje.style.color = "red"
  }
}

