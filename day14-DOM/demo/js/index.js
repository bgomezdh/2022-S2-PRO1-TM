/* alert("Hola desde la terminal");

let respuesta = prompt("Cual es tu nombre?");

console.log(respuesta);

let confirmacion = confirm("Hola " + respuesta + " quiere continuar?");

alert(confirmacion) */

/* siguiente clase-----------------------------*/

let edad = prompt("Cual es tu edad?");

if (edad < 13) {
    alert("No puedes ingresar al cine");
}else if (edad >= 13 && edad <=16) {
    alert("Solo puede ingresar acompañado");
}else{
    alert("Puede ingresar");
}
