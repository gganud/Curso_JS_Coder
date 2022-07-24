const modalContenedor = document.getElementById('modal');
const abrirCarrito = document.getElementById('abrirModal')
const cerrarCarrito = document.getElementById('cerrarModal')
const modalCarrito = document.getElementById('modalCarrito')

abrirCarrito.addEventListener('click', ()=>{
    modalContenedor.classList.toggle('modal-active')
})
cerrarCarrito.addEventListener('click', ()=>{
    modalContenedor.classList.remove('modal-active')
})
modalContenedor.addEventListener('click',() =>{
    cerrarCarrito.click();
})
modalCarrito.addEventListener('click', (e) =>{
    e.stopPropagation();
})