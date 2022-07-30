/* Comienzo de ejecucion */
/* Agregado de operador OR y AND */
orden = JSON.parse(localStorage.getItem('pedido')) || []
orden!="" && mostrarCarrito();
mostrarProductos();
const checkbox = document.getElementById('checkboxDarkmode');
const bodyStyle = document.getElementById('bodyStyle');
const encabezadoStyle = document.getElementById('encabezadoStyle');
checkbox.addEventListener("click", (e) => {
    if (e.target.checked) {
        bodyStyle.classList.toggle('darkModeStyle');
        encabezadoStyle.classList.toggle('darkModeStyle');
    } else {
        bodyStyle.classList.remove('darkModeStyle');
        encabezadoStyle.classList.remove('darkModeStyle');
    }
  });
/* welcome() */
    