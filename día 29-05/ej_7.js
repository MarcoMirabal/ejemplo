function Ejercicio7() {
    function esMayuscula(letra) {
        return letra === letra.toUpperCase();
    }

    function esMinuscula(letra) {
        return letra === letra.toLowerCase();
    }


    var miPalabra = prompt("ingrese su texto");
    var mayuscula = 0;
    var minuscula = 0;
    for (var index = 0; index < miPalabra.length; index++) {
        var letraActual = miPalabra.charAt(index);
        if (esMayuscula(letraActual)) {
           
            mayuscula++;
        }

        if (esMinuscula(letraActual)) {
            
            minuscula++;
        }

    }
    if (mayuscula > 0 && minuscula == 0) {
        console.log("El texto contiene mayúsculas");
    }
    if (mayuscula == 0 && minuscula > 0) {
        console.log("El texto contiene minúsculas");
    }
    if (mayuscula > 0 && minuscula > 0) {
        console.log("El texto contiene mayúsculas y minúsculas");
    }
}