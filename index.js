// Inicializar variables
const precio = 400000;
let cantidad = 0;

// Seleccionar elementos del DOM
const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const totalSpan = document.querySelector(".valor-total");
const btnSumar = document.querySelector("p button:first-of-type"); // Botón +
const btnRestar = document.querySelector("p button:last-of-type"); // Botón -

// Asignar precio inicial
precioSpan.innerHTML = precio;

// Función para actualizar el total
function actualizarTotal() {
  const total = cantidad * precio;
  totalSpan.innerHTML = total.toLocaleString(); // Formato de número con separadores
}

// Eventos para los botones
btnSumar.onclick = () => {
  cantidad++;
  cantidadSpan.innerHTML = cantidad;
  actualizarTotal();
};

btnRestar.onclick = () => {
  if (cantidad > 0) {
    cantidad--;
    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
  }
};
