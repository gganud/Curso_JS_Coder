/* Definicion de constantes y variables */
const items = [];
let orden = [];
let subT = [];
const intTarjeta = 1.2;
const intMpago = 1.15;
let cantidad1=0, cantidad2=0, cantidad3=0, cantidad4=0;
/* Definicion de class para cargar el arreglo con los items */
class Producto{
    constructor(id, nombre, precio, img, descripcion, categoria){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.descripcion = descripcion;
        this.categoria = categoria
    }
}
/* Definicion de class para cargar el arreglo con la orden del pedido */
class Pedido{
    constructor(id, nombre, precio, cantidad){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    subtotal() {return this.precio*this.cantidad}
}
/* Se construyen los productos/items  y se cargan en el arreglo*/
items.push(new Producto(1,"Café", 200,"img/01cafe.jpeg","Descripcion del producto", "Bebidas"));
items.push(new Producto(2,"Jugo", 150,"img/01cafe.jpeg","Descripcion del producto", "Bebidas"));
items.push(new Producto(3,"Té", 180,"img/01cafe.jpeg","Descripcion del producto", "Bebidas"));
items.push(new Producto(4,"Agua", 120,"img/01cafe.jpeg","Descripcion del producto", "Bebidas"));
const bebidas= items.filter (items => items.categoria == "Bebidas")
/* Funcion para identificar el cartel de bienvenida al usuario*/
const presentacion = () => {
    let nombreCliente = prompt(`Por favor ingrese su nombre`);
    let tipoCliente = parseInt(prompt(`Por favor ingrese una opción: \n1: Primera vez en TOTO \n2: Ya soy cliente`));
    while (tipoCliente !=1 && tipoCliente !=2){
    nuevoCliente = parseInt(prompt(`Por favor ingrese una opción: \n1: 1ra vez en TOTO \n2: Ya soy cliente`));
    }
    let bienvenida = document.getElementById("bienvenida");
    let saludo = document.createElement("p");
    if (tipoCliente == 1){
    saludo.innerHTML = `Hola <b>${nombreCliente}</b>, bienvenido/a a <b>TOTO | Resto</b> que disfrutes de nuestra atención y esperamos volver a verte`;  
    }
    if (tipoCliente == 2){
    saludo.innerHTML = `Hola <b>${nombreCliente}</b>, nos alegra verte de vuelta en <b>TOTO | Resto</b> que disfrutes de nuestra atención`;  
    }
    bienvenida.append(saludo);
}
/* Render de pedido/orden */
const carritoIndex = (articuloId) =>{
    const contenedorPedido = document.getElementById("pedidoContenedor")
    let cantidad = 1
    let articulo = items.find( i => i.id == articuloId)
    orden.push(new Pedido(articulo.id,articulo.nombre,articulo.precio,cantidad))
    
    let div = document.createElement('div')
    /* div.classList.add('productoEnCarrito') */
    div.innerHTML = `<p>${articulo.nombre}</p>
                    <p>Precio: $${articulo.precio}</p> 
                    <p id="cantidad${articulo.id}">Cantidad: ${cantidad}</p>
                    <button id="eliminar${articulo.id}">Eliminar</button>
                    `
    contenedorPedido.appendChild(div)
    /* const eliminar = document.getElementById(`eliminar${articulo.id}`)
    eliminar.addEventListener('click', ()=>{
    div.remove()
    orden.splice(orden.indexOf(articuloId),1)
    console.log(orden);    
        } ) */
    

}
/* Render de productos */
function mostrarProductos(cat){
    const categoria = document.getElementById(`productosContenedor${cat[0].categoria}`);
    cat.forEach( i => {
        const div = document.createElement('div')
        /* div.classList.add('card') */
        div.innerHTML += `
                         <img src="${i.img}">
                         <h5>${i.nombre}</h5>
                         <p>Descripción:  ${i.descripcion}</p>
                         <p>Precio:$ ${i.precio}</p>
                         <button id=boton${i.id}><b>Agregar</b></button>
                         `
        categoria.appendChild(div)
        /* const boton = document.getElementById(`boton${i.id}`)
        boton.addEventListener('click', ()=>{
        carritoIndex(i.id)
        } ) */
    } )   
}

/* Comienzo de ejecucion */
presentacion();
mostrarProductos(bebidas);