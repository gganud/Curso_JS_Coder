/* Definicion de constantes y variables */
const items = [];
let orden = [];
let subT = [];
const intTarjeta = 1.2;
const intMpago = 1.15;
let cantidad1=0, cantidad2=0, cantidad3=0, cantidad4=0;
/* Definicion de class para cargar el arreglo con los items */
class Producto{
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}
/* Definicion de class para cargar el arreglo con la orden del pedido */
class Pedido{
    constructor(id, nombre, precio, cantidad){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad
    }
    subtotal() {return this.precio*this.cantidad}
}
/* Se construyen los productos/items  y se cargan en el arreglo*/
items.push(new Producto("01","Café", "200"));
items.push(new Producto("02","Jugo", "150"));
items.push(new Producto("03","Té", "180"));
items.push(new Producto("04","Agua", "120"));

/* Funcion para seleccionar los items y cargarlos en el arreglo "Orden" */
function seleccionItem(){
    let articulo = parseInt(prompt(`Ingrese el artículo que desea ordenar. \n1: ${items[0].nombre} - $${items[0].precio}. \n2: ${items[1].nombre} - $${items[1].precio}. \n3: ${items[2].nombre} - $${items[2].precio}. \n4: ${items[3].nombre} - $${items[3].precio}. \nPara finalizar la orden ingrese "0".`)); 
    while(articulo!=0){
        switch(articulo){
            case 1:
                cantidad1 = parseInt(prompt(`¿Cuantos ${items[0].nombre}/s desea ordenar?`));
                while (isNaN(cantidad1)){
                    alert("Por favor, ingrese una cantidad correcta.");
                    cantidad1 = parseInt(prompt(`¿Cuantos ${items[0].nombre}/s desea ordenar?`));
                }
                orden.push(new Pedido(items[0].id,items[0].nombre,items[0].precio, cantidad1));
                alert(`Se ha agregado ${cantidad1} ${items[0].nombre}/s a su orden`);
                break;
            case 2:
                cantidad2 = parseInt(prompt(`¿Cuantos ${items[1].nombre}/s desea ordenar?`));
                while (isNaN(cantidad2)){
                    alert("Por favor, ingrese una cantidad correcta.");
                    cantidad2 = parseInt(prompt(`¿Cuantos ${items[0].nombre}/s desea ordenar?`));
                }
                orden.push(new Pedido(items[1].id,items[1].nombre,items[1].precio, cantidad2));
                alert(`Se ha agregado ${cantidad2} ${items[1].nombre}/s a su orden`);
                break;
            case 3:
                cantidad3 = parseInt(prompt(`¿Cuantos ${items[2].nombre}/s desea ordenar?`));
                while (isNaN(cantidad3)){
                    alert("Por favor, ingrese una cantidad correcta.");
                    cantidad3 = parseInt(prompt(`¿Cuantos ${items[0].nombre}/s desea ordenar?`));
                }
                orden.push(new Pedido(items[2].id,items[2].nombre,items[2].precio, cantidad3));
                alert(`Se ha agregado ${cantidad3} ${items[2].nombre}/s a su orden`);
                break;
            case 4:
                cantidad4 = parseInt(prompt(`¿Cuantos ${items[3].nombre}/s desea ordenar?`));
                while (isNaN(cantidad4)){
                    alert("Por favor, ingrese una cantidad correcta.");
                    cantidad4 = parseInt(prompt(`¿Cuantos ${items[0].nombre}/s desea ordenar?`));
                }
                orden.push(new Pedido(items[3].id,items[3].nombre,items[3].precio, cantidad4));
                alert(`Se ha agregado ${cantidad4} ${items[3].nombre}/s a su orden`);
                break;
            default:
                alert("Artículo no encontrado");
                break;
        }
        articulo = parseInt(prompt(`Ingrese el artículo que desea ordenar. \n1: ${items[0].nombre} - $${items[0].precio}. \n2: ${items[1].nombre} - $${items[1].precio}. \n3: ${items[2].nombre} - $${items[2].precio}. \n4: ${items[3].nombre} - $${items[3].precio}. \nPara finalizar la orden ingrese "0".`));  
    }
}
/* Funcion para determinar el total segun el medio de pago seleccionado */
const pFinal = (mPago) => {
    if (mPago==1){
        return total;
    }
    if (mPago==2){
        return total = total*intTarjeta;
    }
    if (mPago==3){
        return total = total*intMpago;
    }
}
/* Comienzo de ejecucion */
seleccionItem();
/* Se contruye el arreglo de subtotales segun la orden*/
for (let i=0; i<orden.length; i++){
    subT.push(orden[i].subtotal());
}
/* Se obtiene el total segun subtotales*/
let total = subT.reduce((acc, i)=> acc+i,0);
/* Se muestra el resumen de la orden segun los items ordenados (momentaneamente por alert!!!)*/
alert(`Orden finalizada. El detalle de su orden es: \n${items[0].nombre}: ${cantidad1} u. \n${items[1].nombre}: ${cantidad2} u. \n${items[2].nombre}: ${cantidad3} u. \n${items[3].nombre}: ${cantidad4} u. \n-----------------------\nTotal: $${total}.`);
/* Se muestra el resumen de la orden segun los items ordenados (tambien por consola y ordenados alfabeticamente)*/
orden.sort((a,b)=>{
    if (a.nombre > b.nombre){
        return 1;
    }
    if (a.nombre < b.nombre){
        return -1;
    }
    return 0;
})
console.log(`El resumen de su pedido es:\nProducto (Precio): Cantidad\n`);
for (let i=0; i<orden.length; i++){
    orden[i].nombre;
    orden[i].cantidad;
    console.log(`${orden[i].nombre} ($${orden[i].precio}): ${orden[i].cantidad}`);
}
console.log(`Total: $${total}`);
/* Se selecciona el medio de pago y se muestra el total a abonar. */
let medio = parseInt(prompt(`El total de su orden es de: $${total}. \nA continuación, seleccione el medio de pago a utilizar. \n1: Contado efectivo / Tarjeta de debito. \n2: Tarjeta de credito (20% interés). \n3: Mercado Pago (15% interés).`));
while (medio!=1 & medio!=2 & medio!=3){
    alert("Por favor ingresar un medio de pago correctamente")
    medio = parseInt(prompt(`El total de su orden es de: $${total}. \nA continuación, seleccione el medio de pago a utilizar. \n1: Contado efectivo / Tarjeta de debito. \n2: Tarjeta de credito (20% interés). \n3: Mercado Pago (15% interés).`));
}
let totalPagar = pFinal(medio);
alert(`El total a abonar es de: $${totalPagar.toFixed(2)}. \nMuchas gracias.`);
