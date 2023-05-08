//const botonAdd = document.getElementById('botonAdd');

//botonAdd.addEventListener('click', añadiraALista());

//const añadiraALista = () => {
    

//};

let gastos = [];

function agregarGasto(event) {
  event.preventDefault();
  let nombre = document.getElementById('gasto').value;
  let monto = parseFloat(document.getElementById('monto').value);
  gastos.push({nombre: nombre, monto: monto});
  actualizarGastos();
  actualizarSaldo();
  document.getElementById('gasto').value = '';
  document.getElementById('monto').value = '';
}

document.querySelector('form').addEventListener('submit', agregarGasto);

function actualizarGastos() {
    let lista = '';
    for (let i = 0; i < gastos.length; i++) {
      lista += gastos[i].nombre + ': $' + gastos[i].monto.toFixed(2) + '<br>';
    }
    document.getElementById('gastos').innerHTML = lista;
  }

  function actualizarSaldo() {
    let total = 0;
    for (let i = 0; i < gastos.length; i++) {
      total += gastos[i].monto;
    }
    let saldo = 1000 - total;
    document.getElementById('saldo').innerHTML = 'Saldo final: $' + saldo.toFixed(2);
  }
  
