/* Declaracion de una functions */
function sumar(valorA, valorB) {
    return valorA + valorB;
}

/* Cuando llamamos a la function */
let resultado = sumar(3, 5);

console.log(resultado);

/* Segunda function */

function sacarPorcentaje(porcentaje, cantidadTotal) {
    let result = porcentaje * cantidadTotal / 100;
    /* return "El " + porcentaje + "% de " + cantidadTotal + " es " + result; */
    return `El ${porcentaje}% de ${cantidadTotal} es ${result}`;
}

let resultadoPorcentaje = sacarPorcentaje(10, 1000);

console.log(resultadoPorcentaje);

/* Function expresada */

let restar = function(a , b) {
    return a - b;
}

let valorResta = restar(10, 2);
console.log(valorResta);