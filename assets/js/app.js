// Obtener referencia al elemento de lista HTML
var lista = document.getElementById("miTabla");

// Función para agregar un nuevo elemento a la lista
function agregarElemento() {
  // Crear un nuevo elemento de lista y asignar su contenido
  var nuevoElemento = document.createElement("tbody");
  nuevoElemento.textContent = "Nuevo elemento";
  
  // Agregar el nuevo elemento a la lista
  lista.appendChild(nuevoElemento);
}

// Función para eliminar el último elemento de la lista
function eliminarElemento() {
  // Obtener la cantidad de elementos de la lista
  var cantidadElementos = lista.getElementsByTagName("tbody").length;
  
  // Verificar si hay elementos en la lista para eliminar
  if (cantidadElementos > 0) {
    // Obtener el último elemento de la lista y eliminarlo
    var ultimoElemento = lista.getElementsByTagName("tbody")[cantidadElementos - 1];
    lista.removeChild(ultimoElemento);
  }
}
