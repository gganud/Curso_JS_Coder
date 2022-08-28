const modalContenedor = document.getElementById('cart');
const abrirCarrito = document.getElementById('abrirModal')

abrirCarrito.addEventListener('click', ()=>{
    modalContenedor.classList.toggle('cartActive')
})
