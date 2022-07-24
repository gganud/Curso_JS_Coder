/* Definicion de constantes y variables */
let orden = [];
const intTarjeta = 1.2;
const intMpago = 1.15;
/* Funcion que guarda en localStorage el array del pedido */
const setLocalStorage = () => localStorage.setItem("pedido", JSON.stringify(orden));
/* Render de pedido/orden */
const mostrarCarrito = () =>{    
    const contenedorPedido = document.getElementById("artPedidosContenedor");
    contenedorPedido.innerHTML = "";
    const ordenSinRepetidos = [...new Set(orden)];
    const cantidadCompra = orden.length
    const cantidadPedido = document.getElementById("cantidadPedido")
    cantidadPedido.innerHTML = `${cantidadCompra}` 
    ordenSinRepetidos.forEach(i => {
        let articulo = items.find( elemento => elemento.id == i);
        const cantidadUnidades = orden.reduce((acc, e) =>{ 
            if (i == e){return acc+=1}
            else{return acc}
        }, 0) 
        let div = document.createElement('div');
        div.innerHTML = `<p>${articulo.nombre}</p>
                        <p>Precio $${articulo.precio}</p> 
                        <p>Cantidad ${cantidadUnidades}</p>
                        <button id="eliminar${articulo.id}"><img src="./img/bin.png" alt=""></button>

                        `;
        contenedorPedido.append(div);
        eliminar = document.getElementById(`eliminar${articulo.id}`);
        eliminar.addEventListener('click', () => eliminarArticulo(i))       
    })
    vaciar = document.getElementById(`vaciarCarrito`);
    vaciar.addEventListener('click', ()=>{
        orden=[];
        setLocalStorage();
        mostrarCarrito();
        } )
    totalPedido();    
}

const agregarCarrito = (art) =>{
    orden.push(art);
    setLocalStorage();
    mostrarCarrito();
}
const eliminarArticulo = (art) =>{
    orden = orden.filter((e)=> e != art);
    setLocalStorage();
    mostrarCarrito();
}
/* Se calcula el total del pedido y se envia al DOM */
const totalPedido = () => {
    const monto = orden.reduce((total, i)=>{
        const art = items.find( elemento => elemento.id == i);
        return total+art.precio},0)
    const tarjeta = monto*intTarjeta;
    const mPago = monto*intMpago;
    const totales = document.getElementById('totales');
    totales.innerHTML = `<p>Contado efectivo : $${monto.toFixed(2)}</p>
                        <p>Tarjeta de crédito: $${tarjeta.toFixed(2)}</p> 
                        <p>MercadoPago: $${mPago.toFixed(2)}</p>
                        `;
}
