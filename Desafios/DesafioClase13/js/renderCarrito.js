/* Definicion de constantes y variables */
let orden = [];
const intTarjeta =20;
const intMpago = 15;
const dtoContado = 5;
/* Funcion que guarda en localStorage el array del pedido */
const setLocalStorage = () => localStorage.setItem("pedido", JSON.stringify(orden));
/* Render de pedido/orden */
const mostrarCarrito = () =>{    
    const contenedorPedido = document.getElementById("artPedidosContenedor");
    contenedorPedido.innerHTML = "";
    /* Uso de Spread */
    const ordenSinRepetidos = [...new Set(orden)];
    ordenSinRepetidos.sort((a, b) => a - b);
    const cantidadCompra = orden.length
    const cantidadPedido = document.getElementById("cantidadPedido")
    cantidadPedido.innerHTML = `${cantidadCompra}` 
    ordenSinRepetidos.forEach(i => {
        let articulo = items.find( elemento => elemento.id == i);
        /* Desetruturacion del objeto articulo */
        const {nombre, precio, id, img} = articulo;
        /* Uso de operador ternario y op ++!!! */
        const cantidadUnidades = orden.reduce((acc, e) => i == e ? ++acc : acc, 0) 
        let subtotal = articulo.precio*cantidadUnidades;
        let div = document.createElement('div');
        div.classList.add("cartItems")
        div.innerHTML = `
                        <div class="imageBox">
                            <img class="" src="${img}" alt="">
                        </div>
                        <div class="about">
                            <h1 class="title">${nombre}</h1>
                            <h3 class="subtitle">$${precio}</h3>
                        </div>
                        <div class="counter">
                            <div id="restar${id}" class="btn">-</div>
                            <div class="count">${cantidadUnidades}</div>
                            <div id="sumar${id}" class="btn">+</div>
                        </div>
                        <div class="prices">
                            <div class="amount">$${subtotal}</div>
                            <div id="eliminar${id}" class="remove"><img src="./img/dustbin.png" alt=""></div>
                        </div>
                        
                        `;
        contenedorPedido.append(div);
        const eliminar = document.getElementById(`eliminar${id}`);
        eliminar.addEventListener('click', () => eliminarArticulo(i));
        const sumar = document.getElementById(`sumar${id}`);
        sumar.addEventListener('click', () => sumarArticulo(i)); 
        const restar = document.getElementById(`restar${id}`);
        restar.addEventListener('click', () => restarArticulo(i));      
    })
    vaciar = document.getElementById(`vaciarCarrito`);
    vaciar.addEventListener('click', ()=>{
        alertClearCart();
        } )
    totalPedido(ordenSinRepetidos.length);    
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
const sumarArticulo = (art) =>{
    orden.push(art);
    setLocalStorage();
    mostrarCarrito();
}
const restarArticulo = (art) =>{
    orden.splice(orden.indexOf(art),1)
    setLocalStorage();
    mostrarCarrito();
}
/* Se calcula el total del pedido y se envia al DOM */
const totalPedido = (lista) => {
    const monto = orden.reduce((total, i)=>{
        const art = items.find( elemento => elemento.id == i);
        return total+art.precio},0)
    const cantidad = lista;
    const tarjeta = monto*(intTarjeta+100)/100;
    const mPago = monto*(intMpago+100)/100;
    const contado = monto*(100-dtoContado)/100;
    const montoPedido = document.getElementById('montoPedido');
    montoPedido.innerHTML = `$${monto.toFixed(2)}`
    const checkout = document.getElementById('checkout');
    checkout.innerHTML = ""
    const divResumen = document.createElement('div')
    divResumen.classList.add('total')
    divResumen.innerHTML = `<div>
                                <div class="subtotal">Total</div>
                                <div class="items">${cantidad} items</div>
                            </div>
                            <div class="totalAmount">$${monto.toFixed(2)}</div>
                            `
    checkout.appendChild(divResumen)
    const divTotales = document.createElement('div')
    divResumen.classList.add('mPago')
    divTotales.innerHTML = `
                        <p class="items">Contado (${dtoContado}% OFF): <b>$${contado.toFixed(2)}</b></p>
                        <p class="items">T. crédito (${intTarjeta}%): <b>$${tarjeta.toFixed(2)}</b></p>
                        <p class="items">MercadoPago (${intMpago}%): <b>$${mPago.toFixed(2)}</b></p>
                        `;
    checkout.appendChild(divTotales)
    const boton = document.createElement('div')
    boton.innerHTML = `<button id="confirmCart" class="button">Ordene su pedido</button>`
    checkout.appendChild(boton)
    const confirmCart = document.getElementById(`confirmCart`);
    confirmCart.addEventListener('click', () => alertConfirmCart());
}
