/* Alerta Toast al agregar un producto */
const alertAddProduct = (nombre, precio, img) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-start',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: false,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        iconColor: 'goldenrod',
        title: 'Producto agregado',
        background: 'greysmoke',
        /* background: '#fff',
        color: '#fff', */
        text: `${nombre} - $${precio}`,
        imageUrl: `${img}`,
        imageWidth: 100,
        imageAlt: 'Product Image'
      })
}
/* Alerta advertencia al vaciar el carrito */
const alertClearCart = () => {
    Swal.fire({
        title: 'Estás seguro?',
        text: "Estás a punto de vaciar tu pedido",
        icon: 'warning',
        iconColor: 'goldenrod',
        background: 'greysmoke',
        showCancelButton: true,
        confirmButtonColor: 'goldenrod',
        cancelButtonColor: '#FF6A5B',
        confirmButtonText: 'Si, estoy seguro!',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
            orden=[];
            setLocalStorage();
            mostrarCarrito();
        }
      })  
}
/* Alerta advertencia al confirmar el carrito */
const alertConfirmCart = () => {
    Swal.fire({
        title: 'Estás seguro?',
        text: "Estás a punto de confirmar tu pedido",
        icon: 'warning',
        iconColor: 'goldenrod',
        background: 'greysmoke',
        showCancelButton: true,
        confirmButtonColor: 'goldenrod',
        cancelButtonColor: '#FF6A5B',
        confirmButtonText: 'Si, estoy seguro!',
        cancelButtonText: 'No, aún no!',
      }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "./pages/compra.html";
        }
      })  
}