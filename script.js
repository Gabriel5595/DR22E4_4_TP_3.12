const saida = document.querySelector("#pOut");
const num1 = prompt("Informe um numero");

let fatorial = num1;
let resultado = fatorial;
for (var i = 1; i < fatorial; i++) {
    resultado *= i;
}
console.log(resultado);

saida.innerHTML += `<p>${resultado}<p>`