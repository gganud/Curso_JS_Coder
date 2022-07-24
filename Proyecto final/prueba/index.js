/* Comienzo de ejecucion */
let carritoGuardado = JSON.parse(localStorage.getItem("pedido"))
if (carritoGuardado){
    orden = carritoGuardado;
    if (orden!=""){
        mostrarCarrito();
    }
}
mostrarProductos();
    