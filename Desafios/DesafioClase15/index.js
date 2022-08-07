/* Comienzo de ejecucion */
/* Se manipula el background del sitio median un button checkbox */
const checkbox = document.getElementById('checkboxDarkmode');
const bodyStyle = document.getElementById('bodyStyle');
const encabezadoStyle = document.getElementById('encabezadoStyle');
checkbox.addEventListener("click", (e) => {
    if (e.target.checked) {
        bodyStyle.classList.toggle('darkModeStyle');
        encabezadoStyle.classList.toggle('darkModeStyle');
    } else {
        bodyStyle.classList.remove('darkModeStyle');
        encabezadoStyle.classList.remove('darkModeStyle');
    }
  });
/* Carga de productos en el body*/
loadProducts();