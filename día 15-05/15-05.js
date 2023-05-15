let num = 545
function ejemplo(params){
let inp = document.querySelector("#entrada");
let p = document.querySelector("#salida");
let divImg = document.querySelector("#img");
divImg.innerHTML = '<img src="../día 8-05/img/ciruela.jpg"  alt="error"/>';
let valor = inp.value;
p.innerText = valor;
console.log(p.value);
console.log(inp);
console.dir(valor);
console.log(num);
let r = num * "hola";
console.log(r);
}
