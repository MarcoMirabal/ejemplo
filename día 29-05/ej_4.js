function Ejercicio4(){ 
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
    'E', 'T'];

var DNI = parseInt(prompt("Ingrese su número de DNI"));
var letra =prompt("ingresa a la letra que corresponde a tu DNI");
var letraUsuarioMayuscula = letra.toUpperCase();


if (DNI > 0 && DNI < 99999999) {
    var posicion = DNI % 23;
    if (letras[posicion] == letraUsuarioMayuscula) {
        console.log("El número DNI y la letra son correctos");
    }
    else {
        console.log("La letra que ha indicado no es correcta");
    }
}
else {
    console.log("se ha detectado un error al verificar su DNI. Verifique correctamente");


}
}