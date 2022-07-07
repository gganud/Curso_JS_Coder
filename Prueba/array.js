const arr1 = [{id: 1, cantidad: 2},{id: 2, cantidad: 0},{id: 3, cantidad: 1},{id: 4, cantidad: 7}];
console.log(`id \tcantidad`);
const arrFiltrado = arr1.filter((j) => j.cantidad >0)
for (let i=0; i< arrFiltrado.length; i++){
    /* console.log(`${arr1[i].id} \t${arr1[i].cantidad}`); */
    console.log(`${arrFiltrado[i].id} \t${arrFiltrado[i].cantidad}`);
}
