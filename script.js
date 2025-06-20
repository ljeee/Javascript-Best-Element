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

const semana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]; //Se hace la lista
let count = 0; //Pues pongo un contador para que pueda iniciar desde cero y asi muestre desde 0 que viene siendo Lunes en la lista.

boton.addEventListener("click", () => { //Le pongo el click, porque quiero que actue al hacerle click 
    const lista = document.getElementById("lista");//Llamo al document (HTML) para buscar el id de Lista que es el UL que tengo alla

    for (let x = count; x < count + 1; x++) { //Aqui le estamos diciendo que x toma el valor de count (O asi lo entiendo yo), luego esta diciendo que x debe ser menor a count, entonces como count es 0 se suma y como siempre va a ser menor x que count ya que se esta recorriendo, pues va a seguir subiendo, pero por eso le pusimos el x++ para que solo recorra la lista una vez.
        const li = document.createElement("li"); //Aqui le damos una constante li que crea listas dentro de la clase "li" del HTML
        li.textContent = semana[x]; //con el textContent toma lo que esta dentro de la lista y luego le estamos diciendo
        lista.appendChild(li); //Agregamos a lista los dias de la semana en orden
    }count++; //Se suma para que asi pueda pasar al siguiente dia
    if (count > semana.length) { //Aqui estamos diciendo que si count es mayor o igual a la longitud de semana (Osea al llegar a 6 que es domingo muestra el dia y al darle click ya se reinicia) se reinicie.
        count = 0; //Cuando lo de arriba es correcto se reinicia desde 0
    }
});

