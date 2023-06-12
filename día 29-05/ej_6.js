function Ejercicio6(){
    var numero = parseInt(prompt("ingrese un número"));
    var numPar = numero%2;
    if (numPar == 0){
    console.log("El número que ingresó es par.");
    }
    else{
        console.log("El número que ingresó es impar");
    }
}