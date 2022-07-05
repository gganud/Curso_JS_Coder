const items = [{producto: "Café", precio: 200, cantidad: 0},{producto: "Jugo", precio: 150, cantidad: 0},{producto: "Té", precio: 180, cantidad: 0},{producto: "Agua", precio: 120, cantidad: 0}];
intTarjeta = 1.2;
intMpago = 1.15;
function seleccionItem(){
    let articulo = parseInt(prompt(`Ingrese el artículo que desea ordenar. \n1: ${items[0].producto} - $${items[0].precio}. \n2: ${items[1].producto} - $${items[1].precio}. \n3: ${items[2].producto} - $${items[2].precio}. \n4: ${items[3].producto} - $${items[3].precio}. \nPara finalizar la orden ingrese "0".`));
    while(articulo!=0){
        switch(articulo){
            case 1:
                items[0].cantidad +=1;
                alert(`Se ha agregado un "Café" a su orden.`);
                break;
            case 2:
                items[1].cantidad +=1;
                alert(`Se ha agregado un "Jugo" a su orden.`);
                break;
            case 3:
                items[2].cantidad +=1;
                alert(`Se ha agregado un "Té" a su orden.`);
                break;
            case 4:
                items[3].cantidad +=1;
                alert(`Se ha agregado un "Agua" a su orden.`);
                break;
            default:
                alert("Artículo no encontrado");
                break;
        }
        articulo = parseInt(prompt(`Ingrese el artículo que desea ordenar. \n1: ${items[0].producto} - $${items[0].precio}. \n2: ${items[1].producto} - $${items[1].precio}. \n3: ${items[2].producto} - $${items[2].precio}. \n4: ${items[3].producto} - $${items[3].precio}. \nPara finalizar la orden ingrese "0".`));      
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
let resultado = total(items[0].cantidad,items[1].cantidad,items[2].cantidad,items[3].cantidad);
alert(`Orden finalizada. El detalle de su orden es: \nCafé: ${items[0].cantidad} u. \nJugo: ${items[1].cantidad} u. \nTé: ${items[2].cantidad} u. \nAgua: ${items[3].cantidad} u. \n-----------------------\nTotal es: $${resultado}.`);
let medio = parseInt(prompt(`A continuación, seleccione el medio de pago a utilizar. \n1: Contado efectivo / Tarjeta de debito. \n2: Tarjeta de credito (20% interés). \n3: Mercado Pago (15% interés).`));
while (medio!=1 & medio!=2 & medio!=3){
    alert("Por favor ingresar un medio de pago correctamente")
    medio = parseInt(prompt(`El total de su orden es de: $${resultado}. \nSeleccione el medio de pago a utilizar. \n1: Contado efectivo / Tarjeta de debito. \n2: Tarjeta de credito (20% interés). \n3: Mercado Pago (15% interés).`));
}
let totalPagar = pFinal(medio);
alert(`El total a abonar es de: $${totalPagar.toFixed(2)}. \nMuchas gracias.`);
