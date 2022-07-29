const modalContenedor = document.getElementById('cart');
const abrirCarrito = document.getElementById('abrirModal')
/* const cerrarCarrito = document.getElementById('cerrarModal')
const modalCarrito = document.getElementById('modalCarrito') */

abrirCarrito.addEventListener('click', ()=>{
    modalContenedor.classList.toggle('cartActive')
})
/* cerrarCarrito.addEventListener('click', ()=>{
    modalContenedor.classList.remove('cartActive')
}) */
/* modalContenedor.addEventListener('click',() =>{
    cerrarCarrito.click();
}) */
/* modalCarrito.addEventListener('click', (e) =>{
    e.stopPropagation();
}) */