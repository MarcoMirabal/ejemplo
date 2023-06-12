function Ejercicio5(){ 
    var entero = parseInt(prompt("ingrese un número"));
    var uno = 1;
    for (let i = entero; i > 0; i--) {
        uno = uno * i;
    }
    console.log(uno);

}