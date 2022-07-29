/* Comienzo de ejecucion */
/* Agregado de operador OR y AND */
orden = JSON.parse(localStorage.getItem('pedido')) || []
orden!="" && mostrarCarrito();
mostrarProductos();
    