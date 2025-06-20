let valorContador = 0;  
const contadorElemento = document.getElementById("contador"); 


const acciones = {
  aumentar: 1,
  disminuir: -1
};


function modificarContador(accion) {
  
  if (acciones[accion]) {
    valorContador += acciones[accion];  
  } 
  actualizarPantalla();
}


function resetContador() {
  valorContador = 0;
  actualizarPantalla();
}


function actualizarPantalla() {
  contadorElemento.textContent = valorContador;
}

