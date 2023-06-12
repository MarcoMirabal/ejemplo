function Ejercicio8() {
    var text = prompt("Ingrese su texto para verificar si es un palíndromo o no.");
    var cadenaEspacio = text.split(" ").join("");
    console.log(cadenaEspacio);
    const invertedText = cadenaEspacio.split("").reverse().join("");
    if (cadenaEspacio.toUpperCase() === invertedText.toUpperCase()) {
        console.log("es palindromo");
    } else {
        console.log("no es palindromo");
    }

}
  




