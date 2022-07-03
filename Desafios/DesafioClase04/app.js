let nCafe = 0, nJugo = 0, nTe = 0, nAgua = 0;    
function seleccionItem(){
    let articulo = parseInt(prompt('Ingrese el artículo que desea ordenar. \n1: Café - $200. \n2: Jugo - $150. \n3: Té - $180. \n4: Agua - $120. \nPara finalizar la orden ingrese "0".'));
    while(articulo!=0){
        switch(articulo){
            case 1:
                nCafe +=1;
                alert(`Se ha agregado un "Café" a su orden.`);
                break;
            case 2:
                nJugo +=1;
                alert(`Se ha agregado un "Jugo" a su orden.`);
                break;
            case 3:
                nTe +=1;
                alert(`Se ha agregado un "Té" a su orden.`);
                break;
            case 4:
                nAgua +=1;
                alert(`Se ha agregado un "Agua" a su orden.`);
                break;
            default:
                alert("Artículo no encontrado");
                break;
        }
        articulo = parseInt(prompt('Ingrese el artículo que desea ordenar. \n1: Café - $200. \n2: Jugo - $150. \n3: Té - $180. \n4: Agua - $120. \nPara finalizar la orden ingrese "0".'));      
    }
}
seleccionItem();
alert(`Orden finalizada. \nEl detalle de su orden es: \nCafé: ${nCafe} u. \nJugo: ${nJugo} u. \nTé: ${nTe} u. \nAgua: ${nAgua} u.`);
const total = (cantCafe,cantTe,cantJugo,cantAgua) => 200*cantCafe + 180*cantTe + 150*cantJugo + 120*cantAgua;
let resultado = total(nCafe,nJugo,nTe,nAgua);
let medio = parseInt(prompt(`El total de su orden es de: $${resultado}. \nSeleccione el medio de pago a utilizar. \n1: Contado efectivo / Tarjeta de debito. \n2: Tarjeta de credito (20% interés). \n3: Mercado Pago (15% interés).`));
while (medio!=1 & medio!=2 & medio!=3){
    alert("Por favor ingresar un medio de pago correctamente")
    medio = parseInt(prompt(`El total de su orden es de: $${resultado}. \nSeleccione el medio de pago a utilizar. \n1: Contado efectivo / Tarjeta de debito. \n2: Tarjeta de credito (20% interés). \n3: Mercado Pago (15% interés).`));
}
const pFinal = (mPago) => {
    if (mPago==1){
        return resultado;
    }
    if (mPago==2){
        return resultado = resultado*1.2;
    }
    if (mPago==3){
        return resultado = resultado*1.15;
    }
}
let totalPagar = pFinal(medio);
alert(`El total a abonar es de: $${totalPagar.toFixed(2)}. \nMuchas gracias.`);