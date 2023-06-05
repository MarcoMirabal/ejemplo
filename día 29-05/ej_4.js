var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
    'E', 'T'];

var DNI = 8172631;
var division = 23;

if (DNI > 0 && DNI < 99999999) {
    var letra = DNI % division;
    console.log("La letra correspondiente es" + letra);

}
else {
    console.log("se ha detectado un error al verificar su DNI. Verifique correctamente");




}