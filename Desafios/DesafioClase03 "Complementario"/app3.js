let articulo = prompt("Ingrese el artículo que desea ordenar. \nPara finalizar la orden escriba 'Fin'.");
while(articulo!="fin" && articulo!="Fin" && articulo!="FIN"){
    switch(articulo){
        case "cafe":
        case "Cafe":
        case "café":
        case "Café":
        case "CAFE":
            alert(`Se ha agregado un "Café" a su orden.`);
            break;
        case "jugo":
        case "Jugo":
        case "JUGO":
            alert(`Se ha agregado un "Jugo" a su orden.`);
            break;
        case "te":
        case "Te":
        case "TE":
        case "Té":
            alert(`Se ha agregado un "Té" a su orden.`);
            break;
        case "agua":
        case "Agua":
        case "AGUA":
            alert(`Se ha agregado un "Agua" a su orden.`);
            break;
        default:
            alert("Artículo no encontrado")
            break;
    }
    articulo = prompt("Ingrese el artículo que desea ordenar. \nPara finalizar la orden escriba 'Fin'.");        
}
alert('Orden finalizada');
    
