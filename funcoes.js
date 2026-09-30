// 1- Crie uma função que receba um número e retorne o dobro.
function numDobro (numero, dobro){
    return numero * dobro
}
console.log(numDobro(2,2))
// 2- Crie uma função que receba um número e retorne o triplo.
function numeTriplo (numero, triplo){
    return numero * triplo
}
console.log(numeTriplo(15,3))
// 3- Crie uma função que receba dois números e retorne a soma.
function numsoma (numero, numero2) {
    return numero + numero2 
}
console.log(numsoma(2, 2))


// 4- Crie uma função que receba dois números e retorne a multiplicação.
function numDois (numero, numero2, dobro){
    return numero + numero2 * dobro
}
console.log(numDois(2, 2, 10))

// 5- Crie uma função que receba um salário e calcule aumento de 10%. 
function aumentoSalario(salario){
    return salario + (salario * 0.10);
}
console.log(aumentoSalario(7500));


// 6 - Crie uma função que imprima números de 1 até 10.
function contar() {
for (let i = 1; i <= 10; i++) {
console.log(i); 
}
}
contar(10);



// 7- Crie uma função que some todos os números até 10.
  function somar() {
let soma = 0;
for (let i = 1; i <= 10; i++) {
soma = soma + i;
}
   return soma;
}
console.log(somar());

   