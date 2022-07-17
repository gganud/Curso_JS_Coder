/* Definicion de constantes y variables */
const items = [];
let orden = [];
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
/* Render de productos */
function mostrarProductos(cat){
    const categoria = document.getElementById(`productosContenedor${cat[0].categoria}`);
    cat.forEach( i => {
        const div = document.createElement('div')
        div.innerHTML += `
                         <img src="${i.img}">
                         <h5>${i.nombre}</h5>
                         <p>Descripción:  ${i.descripcion}</p>
                         <p>Precio:$ ${i.precio}</p>
                         <button id=boton${i.id}>Agregar</button>
                         `
        categoria.appendChild(div)
    } )   
}

/* Comienzo de ejecucion */
presentacion();
mostrarProductos(bebidas);