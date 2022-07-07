const items = [];
let orden = [];
const intTarjeta = 1.2;
const intMpago = 1.15;
let cantidad1=0, cantidad2=0, cantidad3=0, cantidad4=0;
class Producto{
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}
const producto1 = new Producto("01","Café", "200");
const producto2 = new Producto("02","Jugo", "150");
const producto3 = new Producto("03","Té", "180");
const producto4 = new Producto("04","Agua", "120");
items.push(producto1);
items.push(producto2);
items.push(producto3);
items.push(producto4);

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
                orden.push({nombre: items[0].nombre, cantidad: cantidad1});
                alert(`Se ha agregado ${cantidad1} ${items[0].nombre}/s a su orden`);
                break;
            case 2:
                cantidad2 = parseInt(prompt(`¿Cuantos ${items[1].nombre}/s desea ordenar?`));
                while (isNaN(cantidad2)){
                    alert("Por favor, ingrese una cantidad correcta.");
                    cantidad2 = parseInt(prompt(`¿Cuantos ${items[0].nombre}/s desea ordenar?`));
                }
                orden.push({nombre: items[1].nombre, cantidad: cantidad2});
                alert(`Se ha agregado ${cantidad2} ${items[1].nombre}/s a su orden`);
                break;
            case 3:
                cantidad3 = parseInt(prompt(`¿Cuantos ${items[2].nombre}/s desea ordenar?`));
                while (isNaN(cantidad3)){
                    alert("Por favor, ingrese una cantidad correcta.");
                    cantidad3 = parseInt(prompt(`¿Cuantos ${items[0].nombre}/s desea ordenar?`));
                }
                orden.push({nombre: items[2].nombre, cantidad: cantidad3});
                alert(`Se ha agregado ${cantidad3} ${items[2].nombre}/s a su orden`);
                break;
            case 4:
                cantidad4 = parseInt(prompt(`¿Cuantos ${items[3].nombre}/s desea ordenar?`));
                while (isNaN(cantidad4)){
                    alert("Por favor, ingrese una cantidad correcta.");
                    cantidad4 = parseInt(prompt(`¿Cuantos ${items[0].nombre}/s desea ordenar?`));
                }
                orden.push({nombre: items[3].nombre, cantidad: cantidad4});
                alert(`Se ha agregado ${cantidad4} ${items[3].nombre}/s a su orden`);
                break;
            default:
                alert("Artículo no encontrado");
                break;
        }
        articulo = parseInt(prompt(`Ingrese el artículo que desea ordenar. \n1: ${items[0].nombre} - $${items[0].precio}. \n2: ${items[1].nombre} - $${items[1].precio}. \n3: ${items[2].nombre} - $${items[2].precio}. \n4: ${items[3].nombre} - $${items[3].precio}. \nPara finalizar la orden ingrese "0".`));  
    }
}
const total = (cantCafe,cantTe,cantJugo,cantAgua) => items[0].precio*cantCafe + items[2].precio*cantTe + items[1].precio*cantJugo + items[3].precio*cantAgua;
const pFinal = (mPago) => {
    if (mPago==1){
        return resultado;
    }
    if (mPago==2){
        return resultado = resultado*intTarjeta;
    }
    if (mPago==3){
        return resultado = resultado*intMpago;
    }
}

seleccionItem();
let resultado = total(cantidad1,cantidad2,cantidad3,cantidad4);
alert(`Orden finalizada. El detalle de su orden es: \n${items[0].nombre}: ${cantidad1} u. \n${items[1].nombre}: ${cantidad2} u. \n${items[2].nombre}: ${cantidad3} u. \n${items[3].nombre}: ${cantidad4} u. \n-----------------------\nTotal es: $${resultado}.`);
let medio = parseInt(prompt(`A continuación, seleccione el medio de pago a utilizar. \n1: Contado efectivo / Tarjeta de debito. \n2: Tarjeta de credito (20% interés). \n3: Mercado Pago (15% interés).`));
while (medio!=1 & medio!=2 & medio!=3){
    alert("Por favor ingresar un medio de pago correctamente")
    medio = parseInt(prompt(`El total de su orden es de: $${resultado}. \nSeleccione el medio de pago a utilizar. \n1: Contado efectivo / Tarjeta de debito. \n2: Tarjeta de credito (20% interés). \n3: Mercado Pago (15% interés).`));
}
let totalPagar = pFinal(medio);
alert(`El total a abonar es de: $${totalPagar.toFixed(2)}. \nMuchas gracias.`);
