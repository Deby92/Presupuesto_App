
// Variable global para almacenar el presupuesto
var presupuesto = 0;

function agregarPresup() {
  // Obtener el valor del input de presupuesto
  var inputPresup = document.getElementById("inputPresup").value;

  // Convertir el valor del input a un número
  var presupuestoNumerico = parseInt(inputPresup);

  // Asignar el presupuesto a la variable global
  presupuesto = presupuestoNumerico;

  // Mostrar el presupuesto en la página
  document.getElementById("presupuesto").innerHTML = " $" + presupuesto;
}

function btnAgregarGasto() {
  // Obtener los valores del input de gasto
  var inputGasto = document.getElementById("inputGasto").value;
  var montoGasto = document.getElementById("montoGastoInput").value;

  // Convertir el valor del monto de gasto a un número
  var montoNumerico = parseInt(montoGasto);

  // Restar el monto del gasto del presupuesto
  presupuesto -= montoNumerico;

  // Mostrar el presupuesto actualizado en la página
  document.getElementById("saldo").innerHTML = " $" + presupuesto;

  // Mostrar el gasto en la lista de gastos
  var listaGastos = document.getElementById("listaGastos");
  listaGastos.innerHTML += "<ul>" + inputGasto + ": $" + montoGasto + "</ul>";
}

function btnEliminarPresup() {
  // Reiniciar el presupuesto a cero
  presupuesto = 0;

  // Mostrar el presupuesto en la página
  document.getElementById("presupuesto").innerHTML = " $" + presupuesto;

  // Limpiar la lista de gastos
  var listaGastos = document.getElementById("listaGastos");
  listaGastos.innerHTML = "";
  document.getElementById("presupuesto").innerHTML = "";
  document.getElementById("saldo").innerHTML = "";
  document.getElementById("inputPresup").value = "";
  document.getElementById("inputGasto").value = "";
  document.getElementById("montoGastoInput").value = ""
}
function btnAgregarGasto() {
  // Obtener los valores del input de gasto
  var inputGasto = document.getElementById("inputGasto").value;
  var montoGasto = document.getElementById("montoGastoInput").value;

  // Convertir el valor del monto de gasto a un número
  var montoNumerico = parseInt(montoGasto);

  // Restar el monto del gasto del presupuesto
  presupuesto -= montoNumerico;

  // Mostrar el presupuesto actualizado en la página
  document.getElementById("saldo").innerHTML = " $" + presupuesto;

  // Crear un botón para eliminar el gasto
  var botonEliminar = document.createElement("buttonIcon");
  botonEliminar.innerHTML = `<i class="fa fa-trash-can fa-xs"></i>`;
  botonEliminar.onclick = function() {
    // Restar el monto del gasto eliminado del presupuesto
    presupuesto += montoNumerico;
    document.getElementById("saldo").innerHTML = " $" + presupuesto;

    // Eliminar el elemento de la lista
    listaGastos.removeChild(gasto);
  };

  // Crear un elemento de lista para el gasto
  var gasto = document.createElement("ul");
  gasto.innerHTML = inputGasto + ": $" + montoGasto + " ";
  gasto.appendChild(botonEliminar);
  // Agregar el gasto a la lista de gastos
  var listaGastos = document.getElementById("listaGastos");
  listaGastos.appendChild(gasto);
}
