/* Bienvenida al local */
const welcome = () => {
  Swal
  .fire({
      title: "Welcome to Toto | Resto",
      background: 'greysmoke',
      imageUrl: `./img/logo.png`,
      imageWidth: 100,
      imageAlt: 'Logo Image',
      text: "Por favor ingrese su nombre",
      input: "text",
      showCancelButton: false,
      confirmButtonText: "Aceptar",
      confirmButtonColor: 'goldenrod',
      inputValidator: nombre => {
          if (!nombre) {
              return "Debes ingresar un nombre";
          } else {
              return undefined;
          }
      }
  })
  .then(resultado => {
      if (resultado.value) {
          Swal.fire({
            title: `Hola ${resultado.value}!`,
            text: "Que disfrutes de nuestra atención.",
            confirmButtonText: "Aceptar",
            confirmButtonColor: 'goldenrod',
          })
          
      }
  });
}
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
        title: 'Producto agregado!',
        background: 'greysmoke',
        text: `${nombre} - $${precio}`,
        imageUrl: `${img}`,
        imageWidth: 100,
        imageAlt: 'Product Image'
      })
}
/* Alerta Toast al eliminar un producto del carrito*/
const alertRemoveProduct = (nombre) => {
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
    title: 'Producto eliminado!',
    background: 'greysmoke',
    text: `${nombre}`,
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
  const pageComprar = () => window.location.href = "./pages/compra.html"  
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
      }).then((result) => result.isConfirmed && pageComprar()
      )  
}
