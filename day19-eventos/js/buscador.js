let form = document.querySelector('form');
let inputBusqueda = document.querySelector('#search');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    console.log(inputBusqueda.value);

    if (inputBusqueda.value == '') {
        alert('Debe ingresar una palabra.');
    }else if(inputBusqueda.value.length < 5){
        alert('Palabra muy corta, Deben ser 5 caracteres')
    }else {
        this.submit();
    }
} );