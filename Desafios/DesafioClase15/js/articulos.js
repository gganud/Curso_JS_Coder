const items = [];
/* Definicion de class para cargar el arreglo con los items */
class Producto{
    constructor(id, nombre, precio, img, descripcion, categoria){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.descripcion = descripcion;
        this.categoria = categoria;
    }
}
/* Se toman los datos del archivo json local y se agregan mediante una funcion asincrona.*/
const loadProducts = async () => {
    const response = await fetch('./js/data.json');
    const products = await response.json();
    products.forEach(item => {
        /* Se construyen los productos/items  y se cargan en el arreglo*/
        items.push(new Producto(item.id,item.nombre,item.precio,item.img,item.descripcion,item.categoria,));
    });
    mostrarProductos()
    /* Agregado de operador OR y Ternario */
    orden = JSON.parse(localStorage.getItem('pedido')) || []
    if (orden!="") {mostrarCarrito()
    const nombre = localStorage.getItem('nombre');
    const nombreCliente = document.getElementById("nombreCliente");
    nombreCliente.innerHTML = `${nombre}`; 
}
else {
    const nombreCliente = document.getElementById("nombreCliente");
    nombreCliente.innerHTML = `Nuevo Cliente`; 
    welcome()
}
}