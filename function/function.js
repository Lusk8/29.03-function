console.log(`Exercicios baseados com o valor 5:`)

function soma(n1,n2){
    let total = n1 + n2;
    return total; 
}

console.log(`A soma é ${soma(5,5)}`)

function subtracao(n1,n2){

    let subtracao = n1 - n2;
    return subtracao;
}

console.log(`A subtração é: ${subtracao(5,5)}`)

function multiplicação(n1,n2){

    let multiplicação = n1 * n2;
    return multiplicação;
}

console.log(`A multiplicação é: ${multiplicação(6,6)}`)

function divisao(n1,n2){

    let divisao = n1 / n2;
    return divisao;

}

console.log(`O valor da divisão dá: ${divisao(5,5)}`)

function nomeSobrenome (nome,sobrenome){

    console.log(`O Seu nome é: ${nome} ${sobrenome}`)
    
}
nomeSobrenome('Luan','Alves')

function conversao(temp1){

    let conversao = (temp1 - 32)*5/9
    return conversao
} 

console.log(`A conversao para fahrenheit é: ${conversao(32)}`)

function imc (peso,altura){
 
    let imc = peso / Math.pow(altura, 2)
    return imc.toFixed(2)

}

console.log(`O imc é : ${imc(100,1.78)}`)

function areaq (largura,altura){

    let areaq = largura * altura 
    return areaq
}

console.log(`A area do quadrado é : ${areaq(5,5 )}`)

function areac (raio){
    let areac = Math.PI * Math.pow(raio,2)
    return areac.toFixed(2)
}

console.log(`A area do circulo é: ${areac(5)}`)

