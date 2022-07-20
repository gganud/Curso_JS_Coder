/* Definicion de constantes y variables */
const items = [];
let orden = [];
const intTarjeta = 1.2;
const intMpago = 1.15;
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
items.push(new Producto(1,"Café", 200,"img/01cafe.jpeg","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos velit possimus, cumque quas aliquid", "Bebidas"));
items.push(new Producto(2,"Jugo", 150,"img/01cafe.jpeg","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos velit possimus, cumque quas aliquid", "Bebidas"));
items.push(new Producto(3,"Té", 180,"img/01cafe.jpeg","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos velit possimus, cumque quas aliquid", "Bebidas"));
items.push(new Producto(4,"Agua", 120,"img/01cafe.jpeg","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos velit possimus, cumque quas aliquid", "Bebidas"));
const bebidas= items.filter (items => items.categoria == "Bebidas")

/* Render de productos */
const mostrarProductos = (cat) => {
    const categoria = document.getElementById(`productosContenedor${cat[0].categoria}`);
    cat.forEach( i => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML += `
                <div class="info">
                    <h4>${i.nombre}</h4>
                    <h4 class="precio">$ ${i.precio}</h4>
                    <div>
                        <button class="iconoComprar" id=boton${i.id}><b><img  src="./img/boton-agregar.png" alt=""></b></button>
                    </div>
                </div>
                <div class="fotoBlock">
                    <img class="foto" src="${i.img}" alt="">
                </div>
                <p class="descripcion">${i.descripcion}</p>  
                         `
        categoria.appendChild(div)
        const boton = document.getElementById(`boton${i.id}`)
        boton.addEventListener('click', ()=>{
        agregarCarrito(i)   
        } )
    } )
}
/* Render de pedido/orden */
const mostrarCarrito = () =>{ 
    const contenedorPedido = document.getElementById("artPedidosContenedor") 
    contenedorPedido.textContent = ''
    const ordenSinRepetidos = [...new Set(orden)];
    ordenSinRepetidos.forEach(i => {
        let articulo = items.find( elemento => elemento.id == i.id)
        const cantidadUnidades = orden.reduce((acc, e) =>{ 
            if (i.id == e.id){
                return acc+=1}
            else{
                return acc
            }
            }
            , 0) 
        let div = document.createElement('div')
        div.innerHTML = `<p>${articulo.nombre}</p>
                        <p>Precio: $${articulo.precio}</p> 
                        <p>Cantidad: ${cantidadUnidades}</p>
                        <button id="eliminar${articulo.id}">Eliminar</button>

                        `
        contenedorPedido.appendChild(div)
        eliminar = document.getElementById(`eliminar${articulo.id}`)
        eliminar.addEventListener('click', ()=>{
            eliminarArticulo(i)
            } )       
    })
    totalPedido()
    vaciar = document.getElementById(`vaciarCarrito`)
    vaciar.addEventListener('click', ()=>{
        orden=[]
        mostrarCarrito()
        } )
    
}
const agregarCarrito = (art) =>{
    orden.push(art)
    mostrarCarrito();
}
const eliminarArticulo = (art) =>{
    orden = orden.filter((e)=> e.id != art.id)
    mostrarCarrito();
}
const totalPedido = () => {
    const monto=orden.reduce((total, i)=>total+i.precio,0)
    const tarjeta = monto*intTarjeta;
    const mPago = monto*intMpago;
    const totales = document.getElementById('totales');
    totales.innerHTML = `<p>Contado efectivo : $${monto.toFixed(2)}</p>
                        <p>Tarjeta de crédito: $${tarjeta.toFixed(2)}</p> 
                        <p>Mercado Pago: $${mPago.toFixed(2)}</p>
                        `
                    }
/* Comienzo de ejecucion */
mostrarProductos(bebidas);
