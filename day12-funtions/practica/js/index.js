function rectangulo(largo, ancho) {
    return largo * ancho;
}

function triangulo(altura, base) {
    return altura * base / 2;
}

function largoDeArray(miArray) {
    let largo = miArray.length;
    return "El largo de tu array es de " + largo;
}

function cantidadDeLetras(tuPalabra) {
    let cantidad = tuPalabra.length;
    return `La longitud de la palabra ${tuPalabra} es de ${cantidad} letras`;
}

function dolarHoy(cantidadEnPesos) {
    let dolar = cantidadEnPesos / 300;
    return "El precio " + cantidadEnPesos + " pesos en dolares es " + dolar;
}

function precioFinal(precio) {
    let total = precio * 1.21;
    return "El IVA de 21% de " + precio + " es " + total;
}

function mitad(numero) {
    let mitad = numero / 2;
    return `La mitad de ${numero} es ${mitad}`;
}

/*  ----------------------------------------- Desafio Extra ----------------------------- */
const dias = ["Lunes", "Martes", "Miercoles", "Jueves" , "Viernes", "Sabado", "Domingo"];

function diaSegunNumero(elArray, numero) {
    let dia = elArray[1];
    return dia;
}

/* ------------------------------------------ llamar a la funcion ----------------------- */


let resultado = diaSegunNumero(dias, 3);

console.log(resultado);