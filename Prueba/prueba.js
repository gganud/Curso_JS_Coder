numero1 = parseInt(prompt("Ingrese el numero"));
numero2 = parseInt(prompt("Ingrese el numero"));
function suma(num1,num2){
    return num1+num2;
}
switch(operacion){
    case "+":{
        let resultado = suma(numero1,numero2);
        alert(`El resultado de la operacion es ${resultado}`);
    }
}
