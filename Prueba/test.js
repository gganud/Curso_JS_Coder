let nombreCliente = prompt(`Por favor ingrese su nombre`);
let nuevoCliente = parseInt(prompt(`Por favor ingrese una opción: \n1: 1ra vez en Toto \n2: Ya soy cliente`));
while (nuevoCliente !=1 && nuevoCliente !=2){
    nuevoCliente = parseInt(prompt(`Por favor ingrese una opción: \n1: 1ra vez en Toto \n2: Ya soy cliente`));
}
let saludo = document.createElement("h1");
if (nuevoCliente ==1){
    saludo.innerHTML = `Hola ${nombreCliente}, bienvenido a TOTO | Resto que disfrutes de nuestra atención y esperamos volver a verte.`;  
}
if (nuevoCliente ==2){
    saludo.innerHTML = `Hola ${nombreCliente}, nos alegra verte de vuelta en TOTO | Resto que disfrutes de nuestra atención.`;  
}
document.body.append(saludo);